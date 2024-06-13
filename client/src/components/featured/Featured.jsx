import React from "react";
import FeaturedImg from "../../images/AdamuAbu3.jpg";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance services</i> for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" placeholder="I am looking a writer" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Logo Design</button>
            <button>Ai Services</button>
            <button>Writing</button>
          </div>
        </div>
        <div className="right">
          <img src={FeaturedImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
