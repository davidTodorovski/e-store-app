import React from "react";

import styles from "./button.module.css";

type Props = {
  text: string;
  onIncrement: () => void;
};

export default function Button({ text, onIncrement }: Props) {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={onIncrement} className={styles.button}>
        {text}
      </button>
    </div>
  );
}
