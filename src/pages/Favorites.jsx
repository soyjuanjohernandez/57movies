import React from "react";
import MovieCard from "../components/molecules/movieCard/MovieCard";
import backgroundBlurImg from "../assets/backgroun_bur_mobile.jpg";
import BottomNav from "../components/molecules/bottomNav/BottomNav";

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
      <BottomNav/>
    </div>
  );
};

export default Favorites;
