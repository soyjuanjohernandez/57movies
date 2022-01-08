import React from "react";
import spiderman from "../assets/spiderman.jpg";
import Pill from "../components/atoms/pill/Pill";
import Score from "../components/atoms/score/Score";

import clock from "../assets/clock.svg";
import Person from "../components/molecules/person/Person";

const Detail = () => {
  return (
    <div className="detail" style={{ backgroundImage: `url(${spiderman})` }}>
      <div className="detail__content">

        <img src={spiderman} alt="" srcset="" className="detail__image" />
        <h1>Spider-Man: Far From Home</h1>

        <div className="detail__overview">
          <h3>Overview</h3>
          <p>
            Peter Parker and his friends go on a summer trip to Europe. However,
            they will hardly be able to rest - Peter will have to agree to help
            Nick Fury uncover the mystery of creatures that cause natural
            disasters and destruction throughout the continent.
          </p>
        </div>

        <div className="pills">
          <Pill text="terror" />
          <Pill />
          <Pill text="science sfi" />
        </div>

        <div className="detail__info">
          <p>Nov 24,2021</p>
          <Score />
          <div className="detail__duration">
            <img src={clock} alt="" srcset="" />
            <p>2h 9m</p>
          </div>
        </div>

        <div className="detail__cast">
          <h3>Cast</h3>
          <div className="detail__casting">
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Detail;
