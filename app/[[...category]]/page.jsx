import HomeContainer from "@/containers/home";
import {
  getPopularMovies,
  getUpComing,
  getNowPlayingMovies,
} from "@/services/movie";

import { getCategories, getSingleCategory } from "@/services/category";

export default async function Home({ params }) {
  let { category } = await params;
  const selectedCategory = category ? await getSingleCategory(category[0]) : [];

  const [
    { results: nowPlayingMovies },
    { results: popularMovies },
    { results: upComingMovies },
    { genres: categories },
  ] = await Promise.all([
    getNowPlayingMovies(),
    getPopularMovies(),
    getUpComing(),
    getCategories(),
  ]);

  return (
    <HomeContainer
      nowPlaying={nowPlayingMovies}
      popularMovies={popularMovies}
      upcoming={upComingMovies}
      categories={categories}
      selectedCategory={{
        id: category?.[0] || "",
        movies: selectedCategory.results || [],
      }}
    />
  );
}
