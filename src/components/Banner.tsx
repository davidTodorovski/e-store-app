import React from "react";
import styles from "./banner.module.css";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className={styles.banner}>
      {/* <img src="/images/banner2.jpg" alt="" /> */}
      <div className={styles.bannerTextContainer}>
        <h2>Elevate Your Wardrobe with Us! 🛍️</h2>
        <h2>Shop the Latest Fashion Trends Today. 🌟</h2>
      </div>
    </div>
  );
}
