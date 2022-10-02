import React, { useState } from "react";
import { Key } from '../key';
import styles from "./style.module.css";
import { diatonic, flated, sharped } from '../../theory.js';

const TYPE_SHARPED = 'sharped';
const TYPE_FLATED = 'flated';

export function Keyboard() {
    const [chromatic, setChromatic] = useState(sharped);
    const handleClick = ({target}) => {  
        // ternally expression  
        if (target.value === TYPE_FLATED) {
            setChromatic(flated);
        } else {
            setChromatic(sharped);
        }
    }

    return (
    <div className={styles.container}>
        <div className={styles.chromaticChoose}>
            <p className={styles.chromaticChooseP}>
                Black keys use names with:
            </p>
            <input type='radio' id="sharps" name="sharpOrFlat" value={TYPE_SHARPED} onClick={handleClick} defaultChecked /> 
                <label htmlFor="sharps">sharps</label>
            <input type='radio' id="flats" name="sharpOrFlat" value={TYPE_FLATED} onClick={handleClick}/> 
                <label htmlFor="flats">flats</label>
        </div>
        <div style={{position: 'relative'}}>
            <div className={styles.diatonicKeys}>
                {diatonic.map((note, index) => <Key key={index} tone={note} type='white' />)} 
            </div>
            <div className={styles.chromaticKeys}>
                {chromatic.map((note, index) => <Key key={index} tone={note} type='black' />)}
            </div>
        </div>
    </div>
    )
}
