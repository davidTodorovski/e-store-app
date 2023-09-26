import React from "react";
import useCart from "@/store/store";
import Item, { ItemType } from "./Item";

import styles from "./items.module.css";

interface Props {
  items: ItemType[];
}

export default function Items({ items }: Props) {
  return (
    <>
      <h2 className={styles.itemsHeading}>SHOP OUR LATEST ITEMS</h2>
      <div className={`container ${styles.itemsContainer}`}>
        {items.map((item: ItemType) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
