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

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function Home() {
  const { items, addItems } = useCart();
  const [curNum, setCurNum] = useState(1);
  const isDone = Math.ceil(items.length / NUM_ITEMS) === curNum;
  const fItems = items ? items?.slice(0, NUM_ITEMS * curNum) : [];

  function incrementCurNum() {
    setCurNum((n) => n + 1);
  }

  const { data } = useQuery({
    queryFn: () => fetchData("http://localhost:3000/e-store-items"),
    queryKey: ["items"],
  });

  useEffect(() => {
    if (data) {
      addItems(data);
    }
  }, [data]);

  return (
    <>
      <Banner />
      <Items items={fItems} />
      {!isDone || fItems.lenght ? (
        <Button text="LOAD MORE" onIncrement={incrementCurNum} />
      ) : null}
    </>
  );
}
