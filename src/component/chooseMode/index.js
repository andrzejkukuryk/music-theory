import React from "react";
import { Note } from "../note";
import { Scale } from "../scale";
import styles from "./style.module.css";
import { TYPE_NOTE, TYPE_SCALE } from "../../theory";

export function ChooseMode({ appMode, note, modus }) {
  switch (appMode) {
    case TYPE_NOTE:
      return <Note note={note} />;
    case TYPE_SCALE:
      return <Scale note={note} modus={modus} />;
    default:
      return <p className={styles.defaultP}>Choose mode</p>;
  }
}
