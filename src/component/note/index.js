import React from "react";
import styles from './style.module.css';
import clef from './graph/clef.png';
import note from './graph/wholeNote.png';
import sharp from './graph/sharp.png';
import flat from './graph/flat.png';


export function Note(props) {
    return (
        <div className={styles.container}>
            <img className={styles.clef} src={clef} alt='treble clef'></img>
            <img className={styles.gSharp} src={sharp} alt='sharp'></img>
            <img className={styles.gFlat} src={flat} alt='flat'></img>
            <img className={styles.gNote} src={note} alt='whole note'></img>
            <p>{props.note}</p>
        </div>
    );
};
