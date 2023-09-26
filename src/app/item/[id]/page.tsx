"use client";

import React from "react";
import { useParams } from "next/navigation";

type Props = {};

export default function page() {
  const params = useParams();
  return <div className="container">{params.id}</div>;
}
