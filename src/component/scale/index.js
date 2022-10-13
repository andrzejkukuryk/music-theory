import React from "react";
import { circleOfFifths, range, sharpsCounter } from "../../theory";
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
        const writeLine = () => {
            switch (createClass) {
                case 'note c1':
                    return false;
                    break;
                case 'note a2':
                    return false;
                    break;
                case 'note b2':
                    return false;
                    break;
                default:
                    return true;
            };
        };
        const addedLines = classNames({
            lowerLine: octave === 1,
            upperLine: octave === 2,
            lineDisabled: writeLine()
        });



        return (
            <div style={{ display: 'inline-block' }}>
                <img className={createClass} key={index} src={note} alt={noteToWrite} />
                <img className={addedLines} src={line} key={'line' + { index }} />
            </div>
        );
    };

    const writeChromatics = () => {
        const sharpsOrder = ['sharpDisabled', 'fSharp', 'cSharp', 'gSharp', 'dSharp', 'aSharp', 'eSharp', 'bSharp'];
        const flatsOrder = ['flatDisabled', 'bFlat', 'eFlat', 'aFlat', 'dFlat', 'gFlat', 'cFlat'];

        for (let i = 0; i < sharpsCounter; i++) {

            let sharpClass = `sharpOnStaff ${sharpsOrder[i]}`;
            return (
                <img className={sharpClass} key={i} src={sharp} />
            );
        }
    }
    console.log('sharps counter: ', sharpsCounter);

    if (props.note !== 'X') {
        circleOfFifths(props.note);
    };

    return (
        <div className='container'>
            <img className='clef' src={clef} alt='treble clef'></img>
            {writeChromatics()}
            {range.map((sound, index) => writeNote(sound, index))}
            <p>{range.join(', ')}</p>
        </div>
    );

}