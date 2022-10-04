import React from "react";
import styles from './style.module.css';
import c from './sounds/c.mp3';
import db from './sounds/db.mp3';
import d from './sounds/d.mp3';
import eb from './sounds/eb.mp3';
import e from './sounds/e.mp3';
import f from './sounds/f.mp3';
import gb from './sounds/gb.mp3';
import g from './sounds/g.mp3';
import ab from './sounds/ab.mp3';
import a from './sounds/a.mp3';
import bb from './sounds/bb.mp3';
import b from './sounds/b.mp3';


export function Key(props) {
    const cSound = new Audio(c);
    const dbSound = new Audio(db);
    const dSound = new Audio(d);
    const ebSound = new Audio(eb);
    const eSound = new Audio(e);
    const fSound = new Audio(f);
    const gbSound = new Audio(gb);
    const gSound = new Audio(g);
    const abSound = new Audio(ab);
    const aSound = new Audio(a);
    const bbSound = new Audio(bb);
    const bSound = new Audio(b);

    const diatonicScale = [cSound, dSound, eSound, fSound, gSound, aSound, bSound];
    const chromaticScale = [dbSound, ebSound, gbSound, abSound, bbSound];

    const handleMouseDown = () => {
        props.type === 'black' ? playSound(chromaticScale) : playSound(diatonicScale);
    };

    const handleMouseUp = () => {
        props.type === 'black' ? pauseSound(chromaticScale) : pauseSound(diatonicScale);
    };

    const playSound = (scale) => {
        scale[props.index].play();
    };

    const pauseSound = (scale) => {
        const delay = () => {
            scale[props.index].pause();
            scale[props.index].currentTime = 0;
        };
        setTimeout(delay, 80);
    };

    if (props.type === 'black') {
        return <button className={styles.blackKey} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseOut={handleMouseUp} ></button >
    };

    return (
        <button className={styles.whiteKey} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseOut={handleMouseUp} ></button>
    )
}