import React from "react";

import styles from "./textWithImage.module.css";

type Props = {
  text: string;
  image: string;
  reversed?: boolean;
  headline: string;
};

export default function TextWithImageComp({
  headline,
  text,
  image,
  reversed = false,
}: Props) {
  return (
    <div
      className={`${reversed ? `${styles.reversedContainer}` : ""} ${
        styles.container
      }`}
    >
      <div>
        <h2>{headline}</h2>
        <p>{text}</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
