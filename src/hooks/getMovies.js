import { useState, useEffect } from "react";

const getMovies = (API) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return movies;
};

export default getMovies;
