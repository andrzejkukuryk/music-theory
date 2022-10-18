import React from "react";
import styles from "./style.module.css";

const TYPE_SHARPED = "sharped";
const TYPE_FLATED = "flated";

export function Controls(props) {
  const handleClickChromatic = ({ target }) => {
    target.value === TYPE_FLATED
      ? props.sharpOrFlat(TYPE_FLATED)
      : props.sharpOrFlat(TYPE_SHARPED);
  };

  const { muteSounds } = props;
  const handleChangeMute = () => {
    muteSounds();
  };

  return (
    <div className={styles.container}>
      <div className={styles.chromaticChooseDiv}>
        <p className={styles.chromaticChooseP}>Black keys use names with:</p>
        <input
          type="radio"
          id="sharps"
          name="sharpOrFlat"
          value={TYPE_SHARPED}
          onClick={handleClickChromatic}
          defaultChecked
        />
        <label htmlFor="sharps">sharps</label>
        <input
          type="radio"
          id="flats"
          name="sharpOrFlat"
          value={TYPE_FLATED}
          onClick={handleClickChromatic}
        />
        <label htmlFor="flats">flats</label>
      </div>
      <div className={styles.keyboardMutedDiv}>
        <input type="checkbox" id="muted" onChange={handleChangeMute} />
        <label htmlFor="muted">mute sounds</label>
      </div>
    </div>
  );
}
