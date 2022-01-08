import React from "react";
import MovieCard from "../components/molecules/movieCard/MovieCard";
import backgroundBlurImg from "../assets/backgroun_bur_mobile.jpg";

const Favorites = () => {
  return (
    <div
      className="favorites"
      style={{ backgroundImage: `url(${backgroundBlurImg})` }}
    >

      <div className="favorites__content">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Favorites;
