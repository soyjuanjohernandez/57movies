import { useState, useEffect } from "react";

const getDetail = (API, CAST) => {
  const [detail, setDetail] = useState([]);
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setDetail(data);
        setGenres(data.genres);
      });
    fetch(CAST)
      .then((response) => response.json())
      .then((data) => {
        setCast(data.cast);
      });
  }, []);

  return {
    detail,
    genres,
    cast,
  };
};

export default getDetail;
