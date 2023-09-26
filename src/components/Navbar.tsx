"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

import styles from "./navbar.module.css";

type Props = {};

export default function Navbar({}: Props) {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} href="/">
        Trendify
      </Link>
      <nav>
        <ul className={styles.linkContainer}>
          <li>
            <Link
              className={currentPath === "/" ? `${styles.activeLink}` : ""}
              href="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={currentPath === "/about" ? `${styles.activeLink}` : ""}
              href="/about"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
