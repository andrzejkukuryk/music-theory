import React from "react";
import { circleOfFifths, range } from "../../theory";
import './styles.css';
import clef from './graph/clef.png';
import note from './graph/wholeNote.png';
import sharp from './graph/sharp.png';
import flat from './graph/flat.png';
import line from './graph/line.png';

var classNames = require('classnames');

export function Scale(props) {
    const diatonicRange = [];
    range.map(note => diatonicRange.push(note[0]));

    const indexOfB = diatonicRange.indexOf('B');

    const writeNote = (noteToWrite, index) => {
        const octave = index <= indexOfB ? 1 : 2;
        const createClass = `note ${noteToWrite[0].toLowerCase()}${octave}`;
        const addedLines = classNames({
            lowerLine: noteToWrite === 'C' || 'C#',
            lineDisabled: index !== 0
        });


        return (
            <div style={{ display: 'inline-block' }}>
                <img className={createClass} key={index} src={note} alt={noteToWrite} />
                <img className={addedLines} src={line} key={'line' + { index }} />
            </div>
        );
    };

    if (props.note !== 'X') {
        circleOfFifths(props.note);
    };

    return (
        <div className='container'>
            <img className='clef' src={clef} alt='treble clef'></img>
            {range.map((sound, index) => writeNote(sound, index))}
            <p>{range.join(', ')}</p>
        </div>
    );

}