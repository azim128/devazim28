import React, { useState } from "react";
import { AiFillFacebook, AiFillHeart, AiFillTwitterSquare, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

import '../style/popupsocial.css';

const PopUpSocial = () => {
    const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <div className={clicked ? "social-panel-container visible" : "social-panel-container"}>
        <div className="social-panel">
          <button className="close-btn" onClick={handleClick}>
            <FaTimes/>
          </button>
          <h4>Get in touch on</h4>
          <ul >
            <li>
              <a
                href="https://www.patreon.com/florinpop17"
                target="_blank"
                rel="noreferrer"
              >
                <BsDiscord className="icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/florinpop1705"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterSquare className="icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/florinpop17"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin className="icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/florinpop17"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook className="icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/florinpop17"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className="icon"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button className="floating-btn" onClick={handleClick} >Get in Touch</button>
    </div>
  );
};

export default PopUpSocial;
