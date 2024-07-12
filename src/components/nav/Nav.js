import React from "react";
import "./nav.scss";
import logo from "../../assets/logo.svg";
import Burger from "../burgerMenu/Burger";
import { motion } from "framer-motion";

function Nav() {
  return (
    <motion.div
      className="nav"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav__wrapper">
        <div
          className="nav__logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={logo} alt="logo" />
        </div>

        <ul className="nav__list">
          <motion.li
            className="nav__list-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Home
          </motion.li>
          <motion.li
            className="nav__list-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About
          </motion.li>
          <motion.li
            className="nav__list-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Contact
          </motion.li>
          <motion.li
            className="nav__list-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Blog
          </motion.li>
          <motion.li
            className="nav__list-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Careers
          </motion.li>
        </ul>

        <motion.button
          className="nav__button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Request Invite
        </motion.button>

        <Burger
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </motion.div>
  );
}

export default Nav;
