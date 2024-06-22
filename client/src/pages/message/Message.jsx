import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../../images/user.png";
import "./Message.scss";

function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to={"/messages"}>MESSAGE</Link> &#62; MUSA SULEIMAN &#62;
        </span>
        <div className="messages">
          <div className="item">
            <img src={ProfileImage} alt="profile" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, quod beatae. Facere qui amet, nisi aliquam labore,
              numquam repudiandae aspernatur, ipsa sapiente dignissimos quasi
              in!
            </p>
          </div>
          <div className="item owner">
            <img src={ProfileImage} alt="profile" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, quod beatae. Facere qui amet, nisi aliquam labore,
              numquam repudiandae aspernatur, ipsa sapiente dignissimos quasi
              in!
            </p>
          </div>
          <div className="item">
            <img src={ProfileImage} alt="profile" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, quod beatae. Facere qui amet, nisi aliquam labore,
              numquam repudiandae aspernatur, ipsa sapiente dignissimos quasi
              in!
            </p>
          </div>
          <div className="item owner">
            <img src={ProfileImage} alt="profile" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, quod beatae. Facere qui amet, nisi aliquam labore,
              numquam repudiandae aspernatur, ipsa sapiente dignissimos quasi
              in!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            placeholder="write a message"
            cols={30}
            rows={10}
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
