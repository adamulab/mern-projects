import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";

function GigCard({ item }) {
  return (
    <Link to={"/gig/123"} className="link">
      <div className="gigCard">
        <img src={item.img} alt="image" />
        <div className="info">
          <div className="user">
            <img src={item.profilePicture} alt="profilePicture" />
            <span>{item.username}</span>
          </div>
          <p>{item.description}</p>
          <div className="star">
            <FaStar className="icon" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <FaHeart className="icon" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GigCard;
