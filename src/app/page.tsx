"use client";
import Image from "next/image";
import styles from "./page.module.css";

import useCart from "../store/store";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Items from "@/components/Items";
import Button from "@/components/Button";

const NUM_ITEMS = 4;

export default function Home() {
  const { items, addTodos } = useCart();
  const [curNum, setCurNum] = useState(1);
  const isDone = Math.ceil(items.length / NUM_ITEMS) === curNum;
  const fItems = items ? items.slice(0, NUM_ITEMS * curNum) : [];

  function incrementCurNum() {
    setCurNum((n) => n + 1);
  }

  const { data } = useQuery("items", async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    return data;
  });

  useEffect(() => {
    if (data) {
      addTodos(data);
    }
  }, [data]);

  return (
    <>
      <Banner />
      <Items items={fItems} />
      {!isDone && <Button text="LOAD MORE" onIncrement={incrementCurNum} />}
      {/* {!isDone && <button onClick={() => setNum(num + 1)}>Next Page</button>} */}
    </>
  );
}
