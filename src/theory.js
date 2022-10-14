export const diatonic = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const sharped = ['C#', 'D#', 'F#', 'G#', 'A#'];
export const flated = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];

export let scale = [...diatonic];
export let range = [...scale, scale[0]];
export let sharpsCounter = 0;
export let flatsCounter = 0;

export const resetScale = () => {
    scale = [...diatonic];
};

export const circleOfFifths = (prime) => {
    let rightPrime = '';
    const setRightPrime = (orgPrime) => {
        switch (orgPrime) {
            case 'C#':
            case 'Db':
                rightPrime = 'C#';
                break;
            case 'D#':
            case 'Eb':
                rightPrime = 'Eb';
                break;
            case 'F#':
            case 'Gb':
                rightPrime = 'Gb';
                break;
            case 'G#':
            case 'Ab':
                rightPrime = 'Ab';
                break;
            case 'A#':
            case 'Bb':
                rightPrime = 'Bb';
                break;
            default:
                rightPrime = orgPrime;
        }
    };

    sharpsCounter = 0;
    flatsCounter = 0;

    const stepFwd = () => {
        scale.push(...scale.splice(0, 4));
        scale[6] += '#';
        sharpsCounter++;
    };
    const stepBwd = () => {
        scale.unshift(...scale.splice(3));
        scale[3] += 'b';
        flatsCounter++;
    };

    const runCircle = () => {
        resetScale();
        sharpsCounter = 0;
        while (rightPrime !== scale[0] && sharpsCounter < 11) {
            stepFwd();
        }
        if (sharpsCounter === 11) {
            resetScale();
            while (rightPrime !== scale[0] && flatsCounter < 11) {
                stepBwd();
            }
        }
    };

    const setRange = () => {
        range = [...scale, scale[0]];
    }
    setRightPrime(prime);
    runCircle();
    setRange();
};