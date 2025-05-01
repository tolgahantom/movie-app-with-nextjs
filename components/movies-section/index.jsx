"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

const MoviesSection = ({ title, movies }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.movies}>
        {movies &&
          movies.slice(0, visibleCount).map((movie) => (
            <div className={styles.movie} key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                {movie.poster_path && (
                  <Image
                    fill
                    unoptimized
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  />
                )}
              </Link>
            </div>
          ))}
      </div>

      {visibleCount < movies.length && (
        <button onClick={handleLoadMore} className={styles.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
};

export default MoviesSection;
