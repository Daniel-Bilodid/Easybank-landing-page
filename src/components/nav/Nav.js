import React from "react";
import "./nav.scss";
import logo from "../../assets/logo.svg";

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

        <div className="nav__burger">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
            <g fill="#2D314D" fill-rule="evenodd">
              <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;
