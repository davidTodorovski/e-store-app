import React from "react";
import styles from "./footer.module.css";
import SocialIcons from "./SocialIcons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <p> &copy; 2023 Trendify. All Rights Reserved.</p>
      <SocialIcons />
    </div>
  );
}
