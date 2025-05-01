const categoryURL = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
  },
};

const fetchCategory = async (pathname, query = "") => {
  const res = await fetch(`${categoryURL}${pathname}${query}`, options);
  return res.json();
};

const getCategories = async () => {
  return fetchCategory("genre/movie/list", "?language=en");
};

const getSingleCategory = async (genreId) => {
  return fetchCategory("discover/movie", `?with_genres=${genreId}`);
};

export { getCategories, getSingleCategory };
