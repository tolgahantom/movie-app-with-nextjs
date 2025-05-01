import React from "react";
import styles from "./styles.module.css";

const Skeleton = ({ width, heigth }) => {
  return (
    <>
      <div className={styles.skeleton} style={{ width, heigth }}></div>
    </>
  );
};

export default Skeleton;
