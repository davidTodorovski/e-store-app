import React from "react";

import styles from "./page.module.css";

type Props = {};

export default function page({}: Props) {
  return (
    <div className={`container ${styles.aboutContainer}`}>
      <div>
        <h2>Our Story</h2>
        <p>
          Trendify is your ultimate destination for the latest fashion trends.
          We are passionate about fashion and committed to bringing you the best
          and most stylish clothing and accessories from around the world.
        </p>
      </div>
      <div>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make fashion accessible and affordable for everyone.
          We believe that everyone deserves to look and feel their best, and we
          strive to offer a wide range of trendy and high-quality products at
          competitive prices.
        </p>
      </div>
    </div>
  );
}
