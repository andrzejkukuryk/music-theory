export const createSharps = (numberOfSharps) => {
  const allSharps = ["F#", "C#", "G#", "D#", "A#", "E#", "B#"];
  const sharps = allSharps.slice(0, numberOfSharps);
  return sharps;
};
