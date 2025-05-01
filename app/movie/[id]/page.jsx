import React from "react";
import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";
import { getMovieById, getVideosByMovieId } from "@/services/movie";

export async function generateMetadata({ params }) {
  const { id } = params;
  const selectedMovie = await getMovieById(id);

  if (!selectedMovie) {
    return {
      title: "Movie not found",
    };
  }

  return {
    title: selectedMovie.title,
    description: selectedMovie.overview,
  };
}

const MoviePage = async ({ params }) => {
  const { id } = await params;
  const [selectedMovie, { results: videos }] = await Promise.all([
    getMovieById(id),
    getVideosByMovieId(id),
  ]);

  const limitedVideos = videos.slice(0, 4);

  if (!selectedMovie) {
    notFound();
  }

  return <MovieContainer movie={selectedMovie} videos={limitedVideos} />;
};

export default MoviePage;
