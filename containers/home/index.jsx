import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = async ({
  nowPlaying = [],
  popularMovies = [],
  upcoming = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <>
      <FeaturedMovie movie={nowPlaying?.[18]} />
      <Categories categories={categories} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => genre.id === +selectedCategory.id)
              ?.name || "Movies"
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Now Playing" movies={nowPlaying} />
      <MoviesSection title="Popular Movies" movies={popularMovies} />
      <MoviesSection title="Upcoming" movies={upcoming} />
    </>
  );
};

export default HomeContainer;
