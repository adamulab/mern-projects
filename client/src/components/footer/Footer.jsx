import React from "react";
import "./Footer.scss";
import {
  FaAccessibleIcon,
  FaCoins,
  FaFacebook,
  FaInstagram,
  FaLanguage,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Catigories</h2>
            <span>Graphic Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>sitemap</span>
          </div>
          <div className="item">
            <h2>Catigories</h2>
            <span>Graphic Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>sitemap</span>
          </div>
          <div className="item">
            <h2>Catigories</h2>
            <span>Graphic Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>sitemap</span>
          </div>
          <div className="item">
            <h2>Catigories</h2>
            <span>Graphic Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>sitemap</span>
          </div>
          <div className="item">
            <h2>Catigories</h2>
            <span>Graphic Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>sitemap</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>myFiverr.</h2>
            <span>&copy; myFiver Inc. {new Date().getFullYear()}</span>
          </div>
          <div className="right">
            <div className="social">
              <FaTwitter className="icon" />
              <FaFacebook className="icon" />
              <FaLinkedin className="icon" />
              <FaPinterest className="icon" />
              <FaInstagram className="icon" />
            </div>
            <div className="link">
              <FaLanguage className="icon" />
              <span>English</span>
            </div>
            <div className="link">
              <FaCoins className="icon" />
              <span>USD</span>
            </div>
            <FaAccessibleIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
