import React from "react";
import "./movieCard.scss";
import spiderman from "../../../assets/spiderman.jpg";
import heart from "../../../assets/heart.svg";
import Score from "../../atoms/score/Score";
import { NavLink } from "react-router-dom";
import emptyImage from "../../../assets/logo_null.jpg";

const MovieCard = ({
  title,
  overview,
  release_date,
  vote_average,
  backdrop_path,
  id,
}) => {
  "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US";

  const saveId = (idMovie) => {
    localStorage.setItem("id", idMovie);
  };

  const BASE_URL_IMG = "https://image.tmdb.org/t/p/w300/";

  return (
    <NavLink exact activeClassName="" to="/detail">
      <div
        className="movie-card"
        style={
          backdrop_path === null
            ? { backgroundImage: `url(${emptyImage})` }
            : { backgroundImage: `url(${BASE_URL_IMG}${backdrop_path})` }
        }
        onClick={() => saveId(id)}
      >
        <div className="movie-card__content">
          <h3 className="movie-card__title">{title}</h3>
          <div className="movie-card__info">
            <div className="movie-card__date-score">
              <div className="movie-card__date">{release_date}</div>
              <Score average={vote_average} />
            </div>
            <div className="movie-card__fav">
              <img src={heart} alt="" />
            </div>
          </div>
          <div className="movie-card__overview">
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
