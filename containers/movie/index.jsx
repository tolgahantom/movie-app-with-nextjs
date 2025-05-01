import React from "react";
import FeaturedMovie from "@/components/featured-movie";

const MovieContainer = ({ movie, videos = null }) => {
  return <FeaturedMovie movie={movie} isDetailPage={true} videoKey={videos} />;
};

export default MovieContainer;
