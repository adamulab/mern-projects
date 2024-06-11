import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import User from "../../images/passport.jpg";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Adamu",
    isSeller: true,
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to={"/"} className="link">
            <span className="text">myFiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>

        <div className="links">
          <span>myFiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && (
            <button
              className={
                active ? "button navButton-scroll" : "button navButton"
              }
            >
              Join
            </button>
          )}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={User} alt="user" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gigs
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to={"/"} className="link">
              Graphic & Design
            </Link>
            <Link to={"/"} className="link">
              Video & Animation
            </Link>
            <Link to={"/"} className="link">
              Writing & Transalation
            </Link>
            <Link to={"/"} className="link">
              AI Services
            </Link>
            <Link to={"/"} className="link">
              Digital Marketing
            </Link>
            <Link to={"/"} className="link">
              Music & Audio
            </Link>
            <Link to={"/"} className="link">
              Programming & Tech
            </Link>
            <Link to={"/"} className="link">
              Business
            </Link>
            <Link to={"/"} className="link">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
