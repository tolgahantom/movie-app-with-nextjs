import React from "react";
import CategoriesLoading from "@/components/categories/loading";
import FeaturedMovieLoading from "@/components/featured-movie/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";

const Loading = () => {
  return (
    <>
      <FeaturedMovieLoading></FeaturedMovieLoading>
      <CategoriesLoading></CategoriesLoading>
      <MoviesSectionLoading></MoviesSectionLoading>
      <MoviesSectionLoading></MoviesSectionLoading>
      <MoviesSectionLoading></MoviesSectionLoading>
    </>
  );
};

export default Loading;
