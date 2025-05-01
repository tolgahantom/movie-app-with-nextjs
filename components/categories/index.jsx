"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Categories = ({ categories }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const categoriesPerPage = 6;

  const startIndex = currentPage * categoriesPerPage;
  const endIndex = startIndex + categoriesPerPage;
  const visibleCategories = categories.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < categories.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.categoriesWrapper}>
      <button
        onClick={handlePrev}
        disabled={currentPage === 0}
        className={styles.navButton}
      >
        ◀
      </button>

      <div className={styles.categories}>
        {visibleCategories.map((category) => (
          <Link
            key={category.id}
            className={styles.category}
            href={`/${category.id}`}
          >
            <div className={styles.name}>{category.name}</div>
          </Link>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={endIndex >= categories.length}
        className={styles.navButton}
      >
        ▶
      </button>
    </div>
  );
};

export default Categories;
