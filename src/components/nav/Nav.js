import React from "react";
import "./nav.scss";
import logo from "../../assets/logo.svg";
import Burger from "../burgerMenu/Burger";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__wrapper">
        <div className="nav__logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="nav__list">
          <li className="nav__list-item">Home</li>
          <li className="nav__list-item">About</li>
          <li className="nav__list-item">Contact</li>
          <li className="nav__list-item">Blog</li>
          <li className="nav__list-item">Careers</li>
        </ul>

        <button className="nav__button">Request Invite</button>
        <Burger />
      </div>
    </div>
  );
}

export default Nav;
