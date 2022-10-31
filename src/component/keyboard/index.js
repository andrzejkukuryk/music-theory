import React, { useEffect, useState } from "react";
import { Key } from "../key";
import styles from "./style.module.css";
import { diatonic, flated, sharped } from "../../theory.js";
import { TYPE_FLATED } from "../../theory.js";

export function Keyboard({ pressedKey, blackKeyMode, keyboardMuted }) {
  const [chromatic, setChromatic] = useState(sharped);

  const chromaticMode = () => {
    console.log("chromaticMode");
    blackKeyMode === TYPE_FLATED ? setChromatic(flated) : setChromatic(sharped);
  };
  useEffect(() => {
    chromaticMode();
  }, [chromaticMode]);
  // chromaticMode();
  console.log("halo!");
  return (
    <div className={styles.container}>
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
  );
}
