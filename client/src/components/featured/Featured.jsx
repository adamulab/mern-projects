import React from "react";
import FeaturedImg from "../../images/adamu.png";
import { FaSearch } from "react-icons/fa";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="right">
          <h1>
            Discover the ideal <i>freelance services</i> for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <FaSearch className="searchIcon" />
              <input type="text" placeholder="I am looking for a writer" />
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
      </div>
    </div>
  );
}

export default Featured;
