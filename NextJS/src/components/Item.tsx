import React from "react";

import styles from "./item.module.css";
import Link from "next/link";

type Props = {
  item: ItemType;
};

export interface ItemType {
  id: number;
  image: string;
  itemName: string;
  price: string;
  description: string;
}

export default function Item({ item }: Props) {
  return (
    <Link href={`item/${item.id}`} className={styles.item}>
      <div className={styles.wrapper}>
        <img className={styles.itemImg} src={item.image} alt="" />
        <button className={styles.itemBtn}>Details</button>
      </div>
      <div>
        <p className={styles.itemName}>{item.itemName}</p>
        <p className={styles.itemPrice}>USD${item.price}</p>
      </div>
    </Link>
  );
}
