import React from "react";

import styles from "./page.module.css";
import TextWithImageComp from "@/components/TextWithImageComp";

type Props = {};

export default function page({}: Props) {
  return (
    <div className={`container ${styles.aboutContainer}`}>
      <TextWithImageComp
        text={
          "Trendify is your ultimate destination for the latest fashion trends. We are passionate about fashion and committed to bringing you the best and most stylish clothing and accessories from around the world."
        }
        headline={"Our Story"}
        image={"/images/image1.jpg"}
      />
      <TextWithImageComp
        text={
          "Our mission is to make fashion accessible and affordable for everyone. We believe that everyone deserves to look and feel their best, and westrive to offer a wide range of trendy and high-quality products atcompetitive prices."
        }
        headline={"Our Mission"}
        image={"/images/image2.jpg"}
        reversed={true}
      />
    </div>
  );
}
