import React from "react";
import "./score.scss";
import star from "../../../assets/star.svg";

const Score = ({ average }) => {
  let widthDummy = average * 10;

  return (
    <div className="score" title={`Average : ${widthDummy}`}>
      <img src={star} alt="star" />
      <div className="score__track">
        <div className="score__value" style={{ width: `${widthDummy}%` }}></div>
      </div>
    </div>
  );
};

export default Score;
