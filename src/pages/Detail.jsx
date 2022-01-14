import React, { useEffect, useState } from "react";
import spiderman from "../assets/spiderman.jpg";
import Pill from "../components/atoms/pill/Pill";
import Score from "../components/atoms/score/Score";
import clock from "../assets/clock.svg";
import calendar from "../assets/icons_calenar.svg";
import Person from "../components/molecules/person/Person";
import BottomNav from "../components/molecules/bottomNav/BottomNav";
import getDetail from "../hooks/getDetail";

const Detail = () => {
  const idMovie = localStorage.getItem("id");
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "b86988ff0ef23bfb4377db9ebebc7574";
  const API_URL = `${BASE_URL}/movie/${idMovie}?api_key=${API_KEY}&language=en-US`;

  const CAST_URL = `${BASE_URL}/movie/${idMovie}/credits?api_key=${API_KEY}`;

  const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500/";

  // https://api.themoviedb.org/3/movie/624860?api_key=b86988ff0ef23bfb4377db9ebebc7574&language=en-US

  useEffect(() => {}, []);
  const detail = getDetail(API_URL, CAST_URL);
  const CAST_ITEMS = 20;


  return (
    <div
      className="detail"
      style={{
        backgroundImage: `url(${BASE_URL_IMG}${detail.detail.backdrop_path})`,
      }}
    >
      <div className="detail__content">
        <img
          src={`${BASE_URL_IMG}${detail.detail.poster_path}`}
          alt={detail.detail.title}
          className="detail__image"
        />
        <h1>{detail.detail.title}</h1>

        <div className="detail__overview">
          <h3>Overview</h3>
          <p>{detail.detail.overview}</p>
        </div>

        <div className="pills">
          {detail.genres.map((item) => (
            <li key={item.id} style={{ listStyle: "none" }}>
              <Pill {...item} />
            </li>
          ))}
        </div>

        <div className="detail__info">
          <div className="detail__release">
            <img src={calendar} alt="calendar" />
            <p>{detail.detail.release_date}</p>
          </div>
          <Score average={detail.detail.vote_average} />

          <div className="detail__duration">
            <img src={clock} alt="clock" />
            <p>{detail.detail.runtime} min</p>
          </div>
        </div>
        {detail.cast.length && (
          <div className="detail__cast">
            <h3>Cast</h3>
            <div className="detail__casting">
              {detail.cast.slice(0, ` ${CAST_ITEMS}`).map((item) => (
                <li key={item.id} style={{ listStyle: "none" }}>
                  <Person {...item} />
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default Detail;
