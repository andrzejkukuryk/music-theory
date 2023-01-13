import React from "react";
import styles from "./style.module.css";
import sharp from "./graph/sharp.png";
import flat from "./graph/flat.png";
import classNames from "classnames";

export function Chromatics({
  note,
  pitch,
  row,
  unavailablePosition,
  doubleSigns,
  signsForChromatics,
}) {

const checkPosition = (row, column) => {
  const newPosition = `${row}${column}`;

  if (pitch.length > 2) {
    if (!unavailablePosition.includes(newPosition)) {
      return true;
    }
  }
  return false;
};

const classPositionDiv = classNames({
  [styles.positionDiv]: true,
  [styles.c1]: pitch[0] === "C" && pitch[pitch.length - 1] === "1",
  [styles.d1]: pitch[0] === "D" && pitch[pitch.length - 1] === "1",
  [styles.e1]: pitch[0] === "E" && pitch[pitch.length - 1] === "1",
  [styles.f1]: pitch[0] === "F" && pitch[pitch.length - 1] === "1",
  [styles.g1]: pitch[0] === "G" && pitch[pitch.length - 1] === "1",
  [styles.a1]: pitch[0] === "A" && pitch[pitch.length - 1] === "1",
  [styles.b1]: pitch[0] === "B" && pitch[pitch.length - 1] === "1",
  [styles.c2]: pitch[0] === "C" && pitch[pitch.length - 1] === "2",
  [styles.d2]: pitch[0] === "D" && pitch[pitch.length - 1] === "2",
  [styles.e2]: pitch[0] === "E" && pitch[pitch.length - 1] === "2",
  [styles.f2]: pitch[0] === "F" && pitch[pitch.length - 1] === "2",
  [styles.g2]: pitch[0] === "G" && pitch[pitch.length - 1] === "2",
  [styles.a2]: pitch[0] === "A" && pitch[pitch.length - 1] === "2",
  [styles.b2]: pitch[0] === "B" && pitch[pitch.length - 1] === "2",
  [styles.c3]: pitch[0] === "C" && pitch[pitch.length - 1] === "3",
});

const classSharp0 = classNames({
  [styles.sharpOnStaff]: true,
  [styles.sharpEnabled]: checkPosition(row, 0),
});

const classSharp1 = classNames({
  [styles.sharpOnStaff]: true,
  [styles.sharpEnabled]: checkPosition(row, 1),
});

const classSharp2 = classNames({
  [styles.sharpOnStaff]: true,
  [styles.sharpEnabled]: checkPosition(row, 2),
});

const classSharp3 = classNames({
  [styles.sharpOnStaff]: true,
  [styles.sharpEnabled]: checkPosition(row, 3),
});

const classSharp4 = classNames({
  [styles.sharpOnStaff]: true,
  [styles.sharpEnabled]: checkPosition(row, 4),
});

const classFlat0 = classNames({
  [styles.flatOnStaff]: true,
  [styles.flatEnabled]: checkPosition(row, 0),
});

const classFlat1 = classNames({
  [styles.flatOnStaff]: true,
  [styles.flatEnabled]: checkPosition(row, 1),
});

const classFlat2 = classNames({
  [styles.flatOnStaff]: true,
  [styles.flatEnabled]: checkPosition(row, 2),
});

const classFlat3 = classNames({
  [styles.flatOnStaff]: true,
  [styles.flatEnabled]: checkPosition(row, 3),
});

const classFlat4 = classNames({
  [styles.flatOnStaff]: true,
  [styles.flatEnabled]: checkPosition(row, 4),
});

return (
  <div className={styles.container}>
    {note !== "X" && (
      <div>
        {signsForChromatics[row] === "#" && (
          <div className={classPositionDiv}>
            <img
              className={classSharp4}
              row={row}
              column={4}
              src={sharp}
              alt="sharp"
              name="sharp"
            ></img>
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
        )}
        {signsForChromatics[row] === "b" && (
          <div className={classPositionDiv}>
            <img
              className={classFlat4}
              row={row}
              column={4}
              src={flat}
              alt="flat"
              name="flat"
            ></img>
            <img
              className={classFlat3}
              row={row}
              column={3}
              src={flat}
              alt="flat"
              name="flat"
            ></img>
            <img
              className={classFlat2}
              row={row}
              column={2}
              src={flat}
              alt="flat"
              name="flat"
            ></img>
            <img
              className={classFlat1}
              row={row}
              column={1}
              src={flat}
              alt="flat"
              name="flat"
            ></img>
            <img
              className={classFlat0}
              row={row}
              column={0}
              src={flat}
              alt="flat"
              name="flat"
              pitch={pitch}
            ></img>
          </div>
        )}
      </div>
    )}
  </div>
);
}
