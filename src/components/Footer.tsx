import React from "react";
import styles from "./footer.module.css";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <p> &copy; 2023 Trendify. All Rights Reserved.</p>
      <div className={styles.iconsContainer}>
        <img src="/images/facebook_icon.png" alt="" />
        <img src="/images/instagram_icon.png" alt="" />
        <img src="/images/twitter_icon.png" alt="" />
      </div>
    </div>
  );
}
