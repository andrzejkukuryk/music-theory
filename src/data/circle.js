export const circleOfFifths = (prime) => {
  const diatonic = ["C", "D", "E", "F", "G", "A", "B"];
  let scale = [...diatonic];
  let sharpsCounter = 0;
  let flatsCounter = 0;

  const stepFwd = () => {
    scale.push(...scale.splice(0, 4));
    scale[6] += "#";

    sharpsCounter++;
  };
  const stepBwd = () => {
    scale.unshift(...scale.splice(3));
    scale[3] += "b";

    flatsCounter++;
  };

  const resetScale = () => {
    scale = [...diatonic];
  };

  const runCircle = () => {
    resetScale();
    sharpsCounter = 0;

    while (prime !== scale[0] && sharpsCounter < 11) {
      stepFwd();
    }
    if (sharpsCounter === 11) {
      resetScale();
      while (prime !== scale[0] && flatsCounter < 11) {
        stepBwd();
      }
    }
  };

  runCircle();
  return scale;
};
