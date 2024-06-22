import React from "react";
import "./ProjectsCard.scss";
import { Link } from "react-router-dom";

function ProjectsCard({ item }) {
  return (
    <Link to={"/gigs?cat=design"} className="link">
      <div className="projectCard">
        <img src={item.img} alt="picture" />
        <div className="info">
          <img src={item.profilePicture} alt="profilePicture" />
          <div className="texts">
            <h2>{item.category}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectsCard;
