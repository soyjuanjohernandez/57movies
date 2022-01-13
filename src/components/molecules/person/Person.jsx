import React from "react";
import "./person.scss";
import emptyImage from '../../../assets/logo_null.jpg'

const Person = ({ character, original_name, profile_path }) => {
  const BASE_URL_IMG = "https://image.tmdb.org/t/p/w200/";

  return (
    <div className="person">
      <div className="person__img-container">
        <img src={(profile_path === null) ? emptyImage : `${BASE_URL_IMG}${profile_path}`} alt={character} />
      </div>
      <div className="person__text">
        <h4>{original_name}</h4>
        <p>{character}</p>
      </div>
    </div>
  );
};

export default Person;
