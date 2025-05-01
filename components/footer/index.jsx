import React from "react";
import styles from "./styles.module.css";
import { Dancing_Script } from "next/font/google";

const DancingScriptFont = Dancing_Script({ subsets: ["latin"] });

const Footer = () => {
  return <div className={styles.footer}>Made by Tolgahan Tom</div>;
};

export default Footer;
