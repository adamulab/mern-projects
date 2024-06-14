import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import CategoryCard from "../../components/catCard/CategoryCard";
import { FaCheck } from "react-icons/fa";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>
              A vast array of <i>freelance talent</i> at your fingertips
            </h1>
            <div className="title">
              <FaCheck className="checkIcon" />
              Top Talent
            </div>
            <p>
              Connect with highly skilled professionals dedicated to delivering
              exceptional results every time.
            </p>
            <div className="title">
              <FaCheck className="checkIcon" />
              Affordable Excellence
            </div>
            <p>
              Enjoy premium services at competitive rates, ensuring value
              without compromising quality.
            </p>
            <div className="title">
              <FaCheck className="checkIcon" />
              Reliable Delivery
            </div>
            <p>
              Count on us for punctual and consistent project completion,
              meeting all your deadlines.
            </p>
            <div className="title">
              <FaCheck className="checkIcon" />
              Personalized Approach
            </div>
            <p>
              Get customized solutions tailored specifically to your unique
              business requirements and goals.
            </p>
          </div>
          <div className="item">
            <video src="" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              myFiverrr <i>business</i>
            </h1>
            <h1>
              A tailored business solution for <i>teams.</i>
            </h1>
            <p>
              Enhance your experience with curated tools and benefits,
              specifically designed for businesses.
            </p>
            <div className="title">
              <FaCheck className="checkIcon" />
              Streamlined collaboration tools for effective teamwork.
            </div>
            <div className="title">
              <FaCheck className="checkIcon" />
              Comprehensive solutions to boost team productivity.
            </div>
            <div className="title">
              <FaCheck className="checkIcon" />
              Innovative strategies designed for team success.
            </div>
            <button>Explore myFiverr business</button>
          </div>
          <div className="item">
            <img src="https://i.ibb.co/9pQ6cd3/bg.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
