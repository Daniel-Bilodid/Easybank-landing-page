import React, { useEffect, useState } from "react";
import "./choose.scss";
import { motion, useAnimation } from "framer-motion";
import online from "../../assets/icon-online.svg";
import budgeting from "../../assets/icon-budgeting.svg";
import onboarding from "../../assets/icon-onboarding.svg";
import api from "../../assets/icon-api.svg";

function Choose() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="choose">
      <div className="choose__title">Why choose Easybank?</div>
      <div className="choose__descr">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </div>

      <motion.div
        className="choose__cards-wrapper"
        initial="hidden"
        animate={controls}
      >
        <motion.div className="choose__card" variants={cardVariants}>
          <div className="choose__card-img">
            <img src={online} alt="online" />
          </div>

          <div className="choose__card-title">Online Banking</div>
          <div className="choose__card-descr">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </div>
        </motion.div>

        <motion.div className="choose__card" variants={cardVariants}>
          <div className="choose__card-img">
            <img src={budgeting} alt="budgeting" />
          </div>

          <div className="choose__card-title">Simple Budgeting</div>
          <div className="choose__card-descr">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </div>
        </motion.div>

        <motion.div className="choose__card" variants={cardVariants}>
          <div className="choose__card-img">
            <img src={onboarding} alt="onboarding" />
          </div>

          <div className="choose__card-title">Fast Onboarding</div>
          <div className="choose__card-descr">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </div>
        </motion.div>

        <motion.div className="choose__card" variants={cardVariants}>
          <div className="choose__card-img">
            <img src={api} alt="api" />
          </div>

          <div className="choose__card-title">Open API</div>
          <div className="choose__card-descr">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Choose;
