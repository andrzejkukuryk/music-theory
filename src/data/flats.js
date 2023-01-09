export const createFlats = (numberOfFlats) => {
  const allFlats = ["Bb", "Eb", "Ab", "Db", "Gb", "Cb"];
  const flats = allFlats.slice(0, numberOfFlats);
  return flats;
};
