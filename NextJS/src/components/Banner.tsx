import React from "react";
import styles from "./banner.module.css";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className={styles.banner}>
      {/* <img src="/images/banner2.jpg" alt="" /> */}
      <div className={styles.bannerTextContainer}>
        <p>Elevate Your Wardrobe with Us! 🛍️</p>
        <p>Shop the Latest Fashion Trends Today. 🌟</p>
      </div>
    </div>
  );
}
