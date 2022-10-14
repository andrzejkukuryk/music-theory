import React, { useState } from "react";
import { circleOfFifths, range } from "../../theory";
import './styles.css';
import clef from './graph/clef.png';
import note from './graph/wholeNote.png';
import sharp from './graph/sharp.png';
import flat from './graph/flat.png';
import line from './graph/line.png';

var classNames = require('classnames');

export function Scale(props) {
    const [sharpsNumber, setSharpsNumber] = useState(0);
    const [flatsNumber, setFlatsNumber] = useState(0);
    const [sharps, setSharps] = useState([]);
    const [flats, setFlats] = useState([])

    const sharpsOrder = ['sharpDisabled', 'fSharp', 'cSharp', 'gSharp', 'dSharp', 'aSharp', 'eSharp', 'bSharp'];
    const flatsOrder = ['flatDisabled', 'bFlat', 'eFlat', 'aFlat', 'dFlat', 'gFlat', 'cFlat'];

    const diatonicRange = [];
    range.map(note => diatonicRange.push(note[0]));

    const indexOfB = diatonicRange.indexOf('B');

    const countSigns = () => {
        const scale = [...range];
        scale.pop();

        const scaleFiltered = scale.filter(note => note.length > 1);
        // console.log(scaleFiltered);
        if (scaleFiltered.length > 0) {
            // console.log(scaleFiltered[0][1]);
            // scaleFiltered[0][1] === '#' ? setSigns(scaleFiltered.length, 0) : setSigns(0, scaleFiltered.length);
        }
        // console.log('sharps Number: ', sharpsNumber);
    };

    const setSignsNumber = (sharps, flats) => {
        setSharpsNumber(sharps);
        setFlatsNumber(flats);
    };

    const orderSigns = () => {
        let sharpsArray = [];
        let flatsArray = [];
        for (let i = 0; i <= sharpsNumber; i++) {
            sharpsArray.push(sharpsOrder[i]);
        };
        for (let i = 0; i <= flatsNumber; i++) {
            flatsArray.push(flatsOrder[i]);
        }
        setSharps(sharpsArray);
        setFlats(flatsArray);
    };

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
                <img className={addedLines} src={line} key={'line' + { index }} alt='added line' />
            </div>
        );
    };

    const writeSharps = (sharpToWrite, index) => {
        let sharpClass = `sharpOnStaff ${sharpToWrite}`;
        let sharpKey = `sharp${index}`;
        return (
            <img className={sharpClass} key={sharpKey} src={sharp} alt={sharpToWrite} />
        );
    };

    const writeFlats = (flatToWrite, index) => {
        let flatClass = `flatOnStaff ${flatToWrite}`;
        let flatKey = `flat${index}`
            return (
            <img className={flatClass} key={flatKey} src={flat} alt={flatToWrite} />
        );  
    };

    if (props.note !== 'X') {
        circleOfFifths(props.note);

    };

    countSigns();
    // setSignsNumber(1, 0);
    // orderSigns();


    return (
        <div className='container'>
            <img className='clef' src={clef} alt='treble clef'></img>
            {sharps.map((sign, index) => writeSharps(sign, index))}
            {flats.map((sign, index) => writeFlats(sign, index))}
            {range.map((sound, index) => writeNote(sound, index))}
            <p>{range.join(', ')}</p>
        </div>
    );

}