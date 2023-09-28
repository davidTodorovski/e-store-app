import React from "react";

import styles from "./socialIcons.module.css";

type Props = {};

export default function SocialIcons({}: Props) {
  return (
    <div className={styles.iconsContainer}>
      <img src="/images/facebook_icon.png" alt="" />
      <img src="/images/instagram_icon.png" alt="" />
      <img src="/images/twitter_icon.png" alt="" />
    </div>
  );
}
