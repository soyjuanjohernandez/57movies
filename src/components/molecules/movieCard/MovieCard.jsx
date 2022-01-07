import React from "react";
import "./movieCard.scss";
import spiderman from "../../../assets/spiderman.jpg";
import heart from "../../../assets/heart.svg";
import Score from "../../atoms/score/Score";

const MovieCard = () => {
  return (
    <div
      className="movie-card"
      style={{ backgroundImage: `url(${spiderman})` }}
    >
      <div className="movie-card__content">
        <h3 className="movie-card__title">Spider-Man: Far From Home</h3>
        <div className="movie-card__info">
          <div className="movie-card__date-score">
            <div className="movie-card__date">Nov 24, 2021</div>
            <Score /> 
          </div>
          <div className="movie-card__fav">
              <img src={heart} alt="" srcset="" />
          </div>
          
        </div>
        <div className="movie-card__overview">
            <h3>Overview</h3>
            <p>
                Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.
                Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.
            </p>
          </div>
      </div>
    </div>
  );
};

export default MovieCard;
