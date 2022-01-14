import React, { useEffect, useState } from "react";
import BottomNav from "../components/molecules/bottomNav/BottomNav";
import MovieCard from "../components/molecules/movieCard/MovieCard";
import SearchArea from "../components/molecules/searchArea/searchArea";
import backgroundBlurImg from "../assets/backgroun_bur_mobile.jpg";

const Home = () => {
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "b86988ff0ef23bfb4377db9ebebc7574";
  const API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=1`;

  const [searchItem, setSearchItem] = useState("");
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setDataMovies(data.results));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${
        searchItem || "scarlet"
      }`
    )
      .then((response) => response.json())
      .then((data) => setDataMovies(data.results));
  };

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${backgroundBlurImg})` }}
    >
      <SearchArea handleSubmit={handleSubmit} handleChange={handleChange} />
      <div className="home__content">
        {dataMovies.map((item) => (
          <li key={item.id} style={{ listStyle: "none" }}>
            <MovieCard {...item} />
          </li>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
