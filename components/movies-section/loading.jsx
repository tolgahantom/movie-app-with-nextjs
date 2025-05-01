import React from "react";
import styles from "./styles.module.css";
import Skeleton from "../skeleton";

const MoviesSectionLoading = () => {
  return (
    <div className={styles.moviesSection}>
      <div className={styles.movies}>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} heigth={320}></Skeleton>
          ))}
      </div>
    </div>
  );
};

export default MoviesSectionLoading;
