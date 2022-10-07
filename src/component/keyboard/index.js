import React, { useEffect, useState } from "react";
import { Key } from '../key';
import styles from "./style.module.css";
import { diatonic, flated, sharped } from '../../theory.js';

const TYPE_SHARPED = 'sharped';
const TYPE_FLATED = 'flated';

export function Keyboard(props) {
    const [chromatic, setChromatic] = useState(sharped);
    const [playedNote, setPlayedNote] = useState(null);

    useEffect(() => {
        props.setNote(playedNote);
    }, [playedNote]
    );

    const handleClickChromatic = ({ target }) => {
        target.value === TYPE_FLATED ? setChromatic(flated) : setChromatic(sharped);
    }


    return (
    <div className={styles.container}>
        <div className={styles.chromaticChoose}>
            <p className={styles.chromaticChooseP}>
                Black keys use names with:
            </p>
                <input type='radio' id="sharps" name="sharpOrFlat" value={TYPE_SHARPED} onClick={handleClickChromatic} defaultChecked /> 
                <label htmlFor="sharps">sharps</label>
                <input type='radio' id="flats" name="sharpOrFlat" value={TYPE_FLATED} onClick={handleClickChromatic} /> 
                <label htmlFor="flats">flats</label>
        </div>
            <div style={{ position: 'relative' }}>
            <div className={styles.diatonicKeys}>
                    {diatonic.map((note, index) => <Key key={index} tone={note} index={index} type='white' setPlayedNote={setPlayedNote} />)} 
            </div>
            <div className={styles.chromaticKeys}>
                    {chromatic.map((note, index) => <Key key={index} tone={note} index={index} type='black' setPlayedNote={setPlayedNote} />)}
            </div>
        </div>
    </div>
    )
}
