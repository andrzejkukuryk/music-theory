import React from "react";
import styles from './style.module.css';
import clef from './graph/clef.png';
import note from './graph/wholeNote.png';


export function Note() {
    return (
        <div className={styles.container}>
            <img className={styles.clef} src={clef} alt='treble clef'></img>
            <img className={styles.note} src={note} alt='whole note'></img>
        </div>
    );
};
