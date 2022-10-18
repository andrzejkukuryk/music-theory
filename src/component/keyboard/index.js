import React, { useEffect, useState } from "react";
import { Key } from "../key";
import styles from "./style.module.css";
import { diatonic, flated, sharped } from "../../theory.js";

const TYPE_SHARPED = "sharped";
const TYPE_FLATED = "flated";

export function Keyboard(props) {
  const [chromatic, setChromatic] = useState(sharped);

  const chromaticMode = () => {
    props.blackKeyMode === TYPE_FLATED
      ? setChromatic(flated)
      : setChromatic(sharped);
  };
  useEffect(() => {
    chromaticMode();
  }, [props.blackKeyMode]);

  return (
    <div className={styles.container}>
      <div style={{ position: "relative" }}>
        <div className={styles.diatonicKeys}>
          {diatonic.map((note, index) => (
            <Key
              key={index}
              tone={note}
              index={index}
              type="white"
              pressedKey={props.pressedKey}
              keyboardMuted={props.keyboardMuted}
            />
          ))}
        </div>
        <div className={styles.chromaticKeys}>
          {chromatic.map((note, index) => (
            <Key
              key={index}
              tone={note}
              index={index}
              type="black"
              pressedKey={props.pressedKey}
              keyboardMuted={props.keyboardMuted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
