const baseUrl = "https://api.themoviedb.org/3/movie/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
  },
};

const fetchMovies = async (pathname, query = "") => {
  try {
    const res = await fetch(`${baseUrl}${pathname}${query}`, options);
    return res.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
const getNowPlayingMovies = async () => {
  return fetchMovies("now_playing", "?language=en-US&page=1");
};
const getPopularMovies = async () => {
  return fetchMovies("top_rated", "?language=en-US&page=1");
};
const getUpComing = async () => {
  return fetchMovies("upcoming", "?language=en-US&page=1");
};
const getMovieById = async (movieId) => {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  const data = (await res).json();
  return data;
};
const getVideosByMovieId = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const res = await fetch(url, options);
  const data = res.json();
  return data;
};

export {
  getNowPlayingMovies,
  getPopularMovies,
  getUpComing,
  getMovieById,
  getVideosByMovieId,
};
