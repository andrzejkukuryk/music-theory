import { circleOfFifthsMinor } from "./circleMinor";

export const createMinorScale = (prime) => {
  const range = [...circleOfFifthsMinor(prime), circleOfFifthsMinor(prime)[0]];
  return range;
};
