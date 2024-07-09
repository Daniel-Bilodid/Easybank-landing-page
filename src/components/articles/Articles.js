import React from "react";
import "./articles.scss";

import currency from "../../assets/image-currency.jpg";

function Articles() {
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
            <img src={currency} alt="currency" />
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
      </div>
    </div>
  );
}

export default Articles;
