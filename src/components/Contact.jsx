import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocation, faMailForward } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-bg" id="contact">
      <div className="container">
        <div className="contact-elements">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-4">
              <a className="contact-address" href="/">
                <FontAwesomeIcon icon={faLocation} />
                <div className="space"></div>
                32/E Bharathiyar Street, Villapuram, Madurai, 625012
              </a>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-4">
              <a className="contact-phone" href="https://wa.me/919360992952?text=Hi Friend How can i help you" target="blank">
                <FontAwesomeIcon icon={faPhone} />
                <div className="space"></div>
                +91 9360992952
              </a>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-4">
              <a className="contact-email" href="mailto:your.ravichandiranmekanathan@gmail.com" target="blank">
                <FontAwesomeIcon icon={faMailForward} />
                <div className="space"></div>
                ravichandiranmekanathan <br /> @gmail.com
              </a>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-4">
              <a href="https://www.instagram.com/a2_tamizha/" className="contact-icons" target="blank">
                <FontAwesomeIcon icon={faInstagram} className="contact-insta" />
                <div className="space"></div>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
