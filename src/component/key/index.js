import React from "react";
import styles from './style.module.css';

export function Key(props) {
    
    if (props.type === 'black') {
        return <button className={styles.blackKey} onClick={() => console.log(props.tone)} ></button>
    };

    return (
        <button className={styles.whiteKey} onClick={() => console.log(props.tone)} ></button>
    )
}