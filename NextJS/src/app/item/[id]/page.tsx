"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

import styles from "./page.module.css";
import SocialIcons from "@/components/SocialIcons";

type Props = {};

const fetchData = async (id: any) => {
  try {
    const response = await fetch(`http://localhost:3000/e-store-items/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export default function page() {
  const params = useParams();
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchData(params.id),
    queryKey: ["item"],
  });
  if (isLoading)
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );

  if (isError)
    return (
      <p className={styles.errorMsg}>An error occured please try again.</p>
    );

  return (
    <div className="container">
      <div className={styles.itemDetailsContainer}>
        <div className={styles.imageContainer}>
          <img src={data.image} alt="" />
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.itemName}>{data.itemName}</p>
          <p className={styles.itemPrice}>USD${data.price}</p>
          <p className={styles.itemDesc}>{data.description}</p>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
