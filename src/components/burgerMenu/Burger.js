import React, { useState, useEffect } from "react";
import "./burger.scss";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div className="burger-menu-container">
      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Burger;
