import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

const FeaturedMovie = ({
  movie = {},
  isDetailPage = false,
  videoKey = null,
}) => {
  const { poster_path, title, overview } = movie;
  const lengthLimit = (text) =>
    !text
      ? ""
      : isDetailPage || text.length < 125
      ? text
      : text.slice(0, 120) + "...";

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p className={`${styles.overview}`}>{lengthLimit(overview)}</p>

      {videoKey && (
        <div className={styles.trailers}>
          <h3 className={styles.trailersTitle}>Trailers</h3>
          <div className={styles.videosGrid}>
            {videoKey.map((video) => (
              <div key={video.key} className={styles.videoItem}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.videoTitle}>{video.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Kayra
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>

      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
