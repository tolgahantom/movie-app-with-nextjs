import React from "react";
import Skeleton from "../skeleton";

const FeaturedMovieLoading = () => {
  return (
    <div style={{ width: "100%", height: 500, margin: "50px 0" }}>
      <Skeleton />
    </div>
  );
};

export default FeaturedMovieLoading;
