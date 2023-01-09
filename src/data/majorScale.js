import { circleOfFifths } from "./circle";

export const createMajorScale = (prime) => {
  const range = [...circleOfFifths(prime), circleOfFifths(prime)[0]];
  return range;
};
