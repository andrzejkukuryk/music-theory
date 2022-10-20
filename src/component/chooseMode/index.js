import React from "react";
import { Note } from "../note";
import { Scale } from "../scale";
import styles from "./style.module.css";

const TYPE_NOTE = "note";
const TYPE_SCALE = "scale";

export function ChooseMode(props) {
  const { appMode, note, modus } = props;

  console.log("props note: ", note);
  switch (appMode) {
    case TYPE_NOTE:
      return <Note note={note} />;
      break;
    case TYPE_SCALE:
      return <Scale note={note} modus={modus} />;
      break;
    default:
      return <p className={styles.defaultP}>Choose mode</p>;
  }
}
