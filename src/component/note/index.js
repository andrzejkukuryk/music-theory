import React from "react";
import styles from './style.module.css';
import './styleTest.css';
import clef from './graph/clef.png';
import note from './graph/wholeNote.png';
import sharp from './graph/sharp.png';
import flat from './graph/flat.png';
import line from './graph/line.png';

var classNames = require('classnames');

export function Note(props) {
    let pitch = props.note[0];
    let playedNote = props.note;

    const noteOnStaff = classNames({
        note: pitch !== 'X',
        noteDisabled: pitch === 'X',
        c: pitch === 'C',
        d: pitch === 'D',
        e: pitch === 'E',
        f: pitch === 'F',
        g: pitch === 'G',
        a: pitch === 'A',
        b: pitch === 'B'
    });

    const sharpOnStaff = classNames({
        sharp: true,
        sharpDisabled: playedNote.length === 1 || playedNote[1] === 'b',
        cSharp: pitch === 'C',
        dSharp: pitch === 'D',
        eSharp: pitch === 'E',
        fSharp: pitch === 'F',
        gSharp: pitch === 'G',
        aSharp: pitch === 'A',
        bSharp: pitch === 'B'
    });

    const flatOnStaff = classNames({
        flat: true,
        flatDisabled: playedNote.length === 1 || playedNote[1] === '#',
        cFlat: pitch === 'C',
        dFlat: pitch === 'D',
        eFlat: pitch === 'E',
        fFlat: pitch === 'F',
        gFlat: pitch === 'G',
        aFlat: pitch === 'A',
        bFlat: pitch === 'B'
    });

    const addedLine = classNames({
        lowerLine: true,
        upperLine: false,
        lineDisabled: pitch !== 'C'
    });

    const caption = classNames({
        noteCaption: true,
        noteCaptionDisabled: pitch === 'X'
    });


    return (
        <div className={styles.container}>
            <img className={styles.clef} src={clef} alt='treble clef'></img>
            <img className={sharpOnStaff} src={sharp} alt='sharp'></img>
            <img className={flatOnStaff} src={flat} alt='flat'></img>
            <img className={noteOnStaff} src={note} alt='whole note'></img>
            <img className={addedLine} src={line} alt='added line'></img>
            <p className={caption}>Played note: {props.note}</p>
        </div>
    );
};
