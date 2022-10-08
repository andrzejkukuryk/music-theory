import React from "react";
import styles from './style.module.css';
import './styleTest.css';
import clef from './graph/clef.png';
import note from './graph/wholeNote.png';
import sharp from './graph/sharp.png';
import flat from './graph/flat.png';

var classNames = require('classnames');

export function Note(props) {
    let pitch = props.note[0];

    const noteOnStaff = classNames({
        note: true,
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
        sharpDisabled: false,
        cSharp: pitch === 'C',
        dSharp: pitch === 'D',
        eSharp: pitch === 'E',
        fSharp: pitch === 'F',
        gSharp: pitch === 'G',
        aSharp: pitch === 'A',
        bSharp: pitch === 'B'
    });


    return (
        <div className={styles.container}>
            <img className={styles.clef} src={clef} alt='treble clef'></img>
            <img className={sharpOnStaff} src={sharp} alt='sharp'></img>
            <img className={styles.fFlat} src={flat} alt='flat'></img>
            <img className={noteOnStaff} src={note} alt='whole note'></img>
            <p>{props.note}</p>
        </div>
    );
};
