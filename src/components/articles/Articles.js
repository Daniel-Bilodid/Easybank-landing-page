import React, { useEffect, useState } from "react";
import "./articles.scss";
import { motion, useAnimation } from "framer-motion";

import currency from "../../assets/image-currency.jpg";
import restaurant from "../../assets/image-restaurant.jpg";
import plane from "../../assets/image-plane.jpg";
import confetti from "../../assets/image-confetti.jpg";

function Articles() {
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
    <div className="articles">
      <div className="articles__title">Latest Articles</div>
      <div className="articles__wrapper">
        <div className="articles__card">
          <div className="articles__card-img">
            <img src={currency} alt="currency" />
          </div>
          <div className="articles__card-autor">By Claire Robinson</div>

          <div className="articles__card-title">
            Receive money in any currency with no fees
          </div>
          <div className="articles__card-descr">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </div>
        </div>

        <div className="articles__card">
          <div className="articles__card-img">
            <img src={restaurant} alt="restaurant" />
          </div>
          <div className="articles__card-autor">By Wilson Hutton</div>

          <div className="articles__card-title">
            Treat yourself without worrying about money
          </div>
          <div className="articles__card-descr">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </div>
        </div>

        <div className="articles__card">
          <div className="articles__card-img">
            <img src={plane} alt="plane" />
          </div>
          <div className="articles__card-autor">By Wilson Hutton</div>

          <div className="articles__card-title">
            Take your Easybank card wherever you go
          </div>
          <div className="articles__card-descr">
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </div>
        </div>

        <div className="articles__card">
          <div className="articles__card-img">
            <img src={confetti} alt="confetti" />
          </div>
          <div className="articles__card-autor">By Claire Robinson</div>

          <div className="articles__card-title">
            Our invite-only Beta accounts are now live!
          </div>
          <div className="articles__card-descr">
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
