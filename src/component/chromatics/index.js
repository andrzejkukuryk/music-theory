import React, { useEffect } from "react";
import styles from "./style.module.css";
import sharp from "./graph/sharp.png";
import flat from "./graph/flat.png";
import classNames from "classnames";


export function Chromatics({
  pitch,
  row,
  unavailablePosition,
  setUnavailablePosition,
  addUnavailablePosition,
}) {
  let temporaryUnavailablePosition = [...unavailablePosition];

  const checkPosition = (row, column) => {
    const newPosition = `${row}${column}`;
    if (pitch.length < 3) {
      return false;
    } else {
      if (pitch.length === 3) {
        if (pitch[1] === "#") {
          if (!unavailablePosition.includes(newPosition)) {
            // let temporaryUnavailablePosition = [...unavailablePosition];

            temporaryUnavailablePosition.push("11");
            temporaryUnavailablePosition.push("12");
            // setUnavailablePosition(temporaryUnavailablePosition);
            return true;
          }
        }
      }
    }
  };

  // useEffect(() => setUnavailablePosition(temporaryUnavailablePosition), []);
  const classPositionDiv = classNames({
    [styles.positionDiv]: true,
    [styles.c1]: pitch[0] === "c" && pitch[pitch.length - 1] === "1",
    [styles.d1]: pitch[0] === "d" && pitch[pitch.length - 1] === "1",
    [styles.e1]: pitch[0] === "e" && pitch[pitch.length - 1] === "1",
    [styles.f1]: pitch[0] === "f" && pitch[pitch.length - 1] === "1",
    [styles.g1]: pitch[0] === "g" && pitch[pitch.length - 1] === "1",
    [styles.a1]: pitch[0] === "a" && pitch[pitch.length - 1] === "1",
    [styles.b1]: pitch[0] === "b" && pitch[pitch.length - 1] === "1",
    [styles.c2]: pitch[0] === "c" && pitch[pitch.length - 1] === "2",
    [styles.d2]: pitch[0] === "d" && pitch[pitch.length - 1] === "2",
    [styles.e2]: pitch[0] === "e" && pitch[pitch.length - 1] === "2",
    [styles.f2]: pitch[0] === "f" && pitch[pitch.length - 1] === "2",
    [styles.g2]: pitch[0] === "g" && pitch[pitch.length - 1] === "2",
    [styles.a2]: pitch[0] === "a" && pitch[pitch.length - 1] === "2",
    [styles.b2]: pitch[0] === "b" && pitch[pitch.length - 1] === "2",
    [styles.c3]: pitch[0] === "c" && pitch[pitch.length - 1] === "3",
  });

  const classSharp0 = classNames({
    [styles.sharpOnStaff]: true,
    [styles.sharpEnabled]: checkPosition(row, 0),
    // [styles.sharpDisabled]: pitch.length === 2,
  });

  const classSharp1 = classNames({
    [styles.sharpOnStaff]: true,
    [styles.sharpEnabled]: checkPosition(row, 1),
    // [styles.sharpDisabled]: pitch.length === 2,
  });

  const classSharp2 = classNames({
    [styles.sharpOnStaff]: true,
    [styles.sharpEnabled]: checkPosition(row, 2),
    // [styles.sharpDisabled]: pitch.length === 2,
  });

  const classSharp3 = classNames({
    [styles.sharpOnStaff]: true,
    [styles.sharpEnabled]: checkPosition(row, 3),
    // [styles.sharpDisabled]: pitch.length === 2,
  });

  return (
    <div className={styles.container}>
      <div className={classPositionDiv}>
        <img
          className={classSharp3}
          row={row}
          column={3}
          src={sharp}
          alt="sharp"
          name="sharp"
        ></img>
        <img
          className={classSharp2}
          row={row}
          column={2}
          src={sharp}
          alt="sharp"
          name="sharp"
        ></img>
        <img
          className={classSharp1}
          row={row}
          column={1}
          src={sharp}
          alt="sharp"
          name="sharp"
        ></img>
        <img
          className={classSharp0}
          row={row}
          column={0}
          src={sharp}
          alt="sharp"
          name="sharp"
          pitch={pitch}
        ></img>
      </div>
    </div>
  );
}
