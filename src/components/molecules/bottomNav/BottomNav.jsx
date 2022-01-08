import React from "react";
import { NavLink } from "react-router-dom";
import "./bottomNav.scss";

import iconHome from "../../../assets/icons_home.svg";
import iconHeart from "../../../assets/icons_heart_blue.svg";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <ul>
        <NavLink exact activeClassName="bottom-nav__active" to="/">
          <li>
            <img src={iconHome} alt="" srcset="" />
          </li>
        </NavLink>
        <NavLink exact activeClassName="bottom-nav__active" to="/Favorites">
          <li>
            <img src={iconHeart} alt="" srcset="" />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default BottomNav;
