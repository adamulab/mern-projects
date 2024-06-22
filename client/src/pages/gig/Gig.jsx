import React from "react";
import ProfileImage from "../../images/user.png";
import {
  FaCheck,
  FaClock,
  FaFlag,
  FaRecycle,
  FaStar,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { Slider } from "infinite-react-carousel";
import "./Gig.scss";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            myFiverr &#62; VIDEO & ANIMATIONS &#62;
          </span>
          <h1>Video Editing</h1>

          <div className="user">
            <img src={ProfileImage} alt="profile" />
            <span>Musa Suleiman</span>
            <div className="stars">
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://i.ibb.co/FgyrwNL/f-video-editing.jpg"
              alt="slideImage"
            />
            <img
              src="https://i.ibb.co/4JvQV2r/f-logo-design.jpg"
              alt="slideImage"
            />
            <img
              src="https://i.ibb.co/TKyR4DK/f-writing.jpg"
              alt="slideImage"
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil
            debitis soluta repellendus consectetur deleniti explicabo et iste
            repellat nisi nobis modi atque minima voluptate reiciendis velit
            reprehenderit, nesciunt id obcaecati quisquam nulla quasi. Illum
            perspiciatis optio, aliquam dolores odio amet vero debitis
            architecto adipisci molestias eaque quidem veritatis perferendis
            porro doloremque est animi labore? Possimus quae saepe ad magnam ex
            pariatur laboriosam recusandae dolorem non, tempore, cupiditate
            magni, deserunt adipisci facere fugit itaque nesciunt eos amet
            nostrum veniam ullam voluptas! Vitae distinctio fuga aspernatur
            molestias ut iure fugit eos id unde laboriosam eaque, aut suscipit.
          </p>

          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src={ProfileImage} alt="profileImage" />
              <div className="info">
                <span>Musa Suleiman</span>
                <div className="stars">
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <div className="title">From</div>
                  <div className="description">NIG</div>
                </div>
                <div className="item">
                  <div className="title">Member since</div>
                  <div className="description">Jan 2020</div>
                </div>
                <div className="item">
                  <div className="title">Avg. response time</div>
                  <div className="description">5 Hours</div>
                </div>
                <div className="item">
                  <div className="title">Last delivery</div>
                  <div className="description">1 Day</div>
                </div>
                <div className="item">
                  <div className="title">Language</div>
                  <div className="description">English</div>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                delectus perspiciatis modi facilis voluptates qui suscipit
                fugiat atque nam possimus!
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src={ProfileImage} alt="profile" />
                <div className="info">
                  <span>Musa Suleiman</span>
                  <div className="country">
                    <FaFlag className="icon" />
                    <span>Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                dicta omnis sequi perferendis ab? Deserunt sit earum
                voluptatibus dolores accusantium?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <FaThumbsUp className="icon leftIcon" />
                <span>Yes</span>
                <FaThumbsDown className="icon rightIcon" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src={ProfileImage} alt="profile" />
                <div className="info">
                  <span>Musa Suleiman</span>
                  <div className="country">
                    <FaFlag className="icon" />
                    <span>Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                dicta omnis sequi perferendis ab? Deserunt sit earum
                voluptatibus dolores accusantium?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <FaThumbsUp className="icon leftIcon" />
                <span>Yes</span>
                <FaThumbsDown className="icon rightIcon" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src={ProfileImage} alt="profile" />
                <div className="info">
                  <span>Musa Suleiman</span>
                  <div className="country">
                    <FaFlag className="icon" />
                    <span>Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                dicta omnis sequi perferendis ab? Deserunt sit earum
                voluptatibus dolores accusantium?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <FaThumbsUp className="icon leftIcon" />
                <span>Yes</span>
                <FaThumbsDown className="icon rightIcon" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Video Editing</h3>
            <h2>$ 63.99</h2>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            pariatur non fuga placeat cum quae nesciunt quam quisquam molestias
            deserunt?
          </p>
          <div className="details">
            <div className="item">
              <FaClock className="icon" />
              <span>2 Day Delivery</span>
            </div>
            <div className="item">
              <FaRecycle className="icon" />
              <span>5 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <FaCheck className="icon greenCheck" />
              <span>Clear Quality</span>
            </div>
            <div className="item">
              <FaCheck className="icon greenCheck" />
              <span>Animated Play</span>
            </div>
            <div className="item">
              <FaCheck className="icon greenCheck" />
              <span>Clear Sourd Qaulity</span>
            </div>
            <div className="item">
              <FaCheck className="icon greenCheck" />
              <span>Prompt Delivery</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
