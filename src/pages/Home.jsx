import React, { useEffect, useState } from "react";
import BottomNav from "../components/molecules/bottomNav/BottomNav";
import MovieCard from "../components/molecules/movieCard/MovieCard";
import backgroundBlurImg from "../assets/backgroun_bur_mobile.jpg";
import getMovies from "../hooks/getMovies";

const Home = () => {
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "b86988ff0ef23bfb4377db9ebebc7574";
  const API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=1`; 

  const movies = getMovies(API_URL)

  // console.log(movies);

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${backgroundBlurImg})` }}
    >
      <div className="home__content">
        {movies.map((item) => (
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
