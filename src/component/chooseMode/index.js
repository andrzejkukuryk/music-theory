import React from "react";
import { Note } from "../note";
import { Scale } from "../scale";
import styles from "./style.module.css";
import { TYPE_CHORD, TYPE_NOTE, TYPE_SCALE } from "../../theory";
import { Chord } from "../chord";

export function ChooseMode({ appMode, note, modus, chordType }) {
  switch (appMode) {
    case TYPE_NOTE:
      return <Note note={note} />;
    case TYPE_SCALE:
      return <Scale note={note} modus={modus} />;
    case TYPE_CHORD:
      return <Chord note={note} chordType={chordType} />;
    default:
      return <p className={styles.defaultP}>Choose mode</p>;
  }
}
