import React, { useEffect, useState } from "react";
import { Key } from "../key";
import styles from "./style.module.css";
import { diatonic, flated, sharped } from "../../theory.js";

const TYPE_SHARPED = "sharped";
const TYPE_FLATED = "flated";

export function Keyboard(props) {
  const [chromatic, setChromatic] = useState(sharped);
  const { pressedKey, blackKeyMode, keyboardMuted } = props;

  const chromaticMode = () => {
    blackKeyMode === TYPE_FLATED ? setChromatic(flated) : setChromatic(sharped);
  };
  useEffect(() => {
    chromaticMode();
  }, [blackKeyMode]);

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
              pressedKey={pressedKey}
              keyboardMuted={keyboardMuted}
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
              pressedKey={pressedKey}
              keyboardMuted={keyboardMuted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
