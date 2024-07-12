import React from "react";
import "./hero.scss";

import bgIntro from "../../assets/bg-intro-desktop.svg";
import mockups from "../../assets/image-mockups.png";
import bgMobile from "../../assets/bg-intro-mobile.svg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__wrapper">
          <div className="hero__images-mobile">
            <div className="hero__img-mobile">
              <img src={bgMobile} alt="bgMobile" />
            </div>
            <div className="hero__mockups-mobile">
              <img src={mockups} alt="mockups" />
            </div>
          </div>
          <div className="hero__text">
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
          </div>

          <div className="hero__img">
            <img src={bgIntro} alt="bgIntro" />
          </div>
        </div>
      </div>
      <div className="hero__mockups">
        <img src={mockups} alt="mockups" />
      </div>
    </>
  );
}

export default Hero;
