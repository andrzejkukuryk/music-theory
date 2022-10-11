import React from "react";
import { circleOfFifths, range } from "../../theory";
import './styles.css';

export function Scale(props) {

    if (props.note !== 'X') {
        circleOfFifths(props.note);
    }

    return (
        <div>
            <p>{range.join(', ')}</p>
        </div>
    );

}