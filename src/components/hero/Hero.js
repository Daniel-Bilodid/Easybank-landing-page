import React, { useState } from "react";
import "./hero.scss";
import { motion } from "framer-motion";

import bgIntro from "../../assets/bg-intro-desktop.svg";
import mockups from "../../assets/image-mockups.png";
import bgMobile from "../../assets/bg-intro-mobile.svg";

function Hero() {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  return (
    <>
      <div className="hero">
        <div className="hero__wrapper">
          <motion.div
            className="hero__images-mobile"
            initial={animationsEnabled ? { opacity: 0, x: -50 } : {}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero__img-mobile">
              <img src={bgMobile} alt="bgMobile" />
            </div>
            <div className="hero__mockups-mobile">
              <img src={mockups} alt="mockups" />
            </div>
          </motion.div>

          <motion.div
            className="hero__text"
            initial={animationsEnabled ? { opacity: 0, y: 50 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="hero__text-title">
              Next generation digital banking
            </h1>

            <div className="hero__text-descr">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </div>

            <div className="hero__btn-wrapper">
              <button className="hero__text-btn">Request Invite</button>
            </div>
          </motion.div>

          <motion.div
            className="hero__img"
            initial={animationsEnabled ? { opacity: 0, x: 50 } : {}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src={bgIntro} alt="bgIntro" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero__mockups"
        initial={animationsEnabled ? { opacity: 0 } : {}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img src={mockups} alt="mockups" />
      </motion.div>
    </>
  );
}

export default Hero;
