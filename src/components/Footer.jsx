import React from "react";
import '../styles/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="Footer-bg">
      <div className="container">
        <p className="Footer-text">
          Front-end developer with 3 months of internship experience at
          Alphagnito Pvt Ltd. Proficient in HTML, CSS, JavaScript, and React.js
          basics. Developed responsive web applications, focusing on
          user-friendly designs and efficient code. Eager to leverage skills and
          passion for web development in the IT industry.
        </p>
        <div className="Footer-icons">
          <a href="https://www.instagram.com/a2_tamizha/" target="blank">
          <FontAwesomeIcon icon={faInstagram} className="Fa-icons"/>
          </a>
          <a href="/">
          <FontAwesomeIcon icon={faTwitter} className="Fa-icons"/>
          </a>
          <a href="/">
          <FontAwesomeIcon icon={faHouse} className="Fa-icons" href="#Navbar"/>
          </a>
          <a href="https://www.youtube.com/channel/UCdIeCiCtAnne4D3IWtKMkeA" target="blank">
          <FontAwesomeIcon icon={faYoutube} className="Fa-icons"/>
          </a>
          <a href="/">
          <FontAwesomeIcon icon={faFacebook} className="Fa-icons"/>
          </a>
        </div>
        <div className="Footer-hr"></div>
        <p className="Copyrights">
        &copy; 2024 Ravichandiran A M M. All rights reserved.
        </p>
      </div>
    </div>
  );
}
