import React from "react";
import "../styles/Projects.css";
import Img1 from '../assets/Pimg1.png';
import Img2 from '../assets/Pimg2.png';
import Img3 from '../assets/Pimg3.png';

export default function Projects() {
  return (
    <div className="Projects-bg" id="Project">
      <div className="container">
        <h1 className="projects-title">
          Notable <span> Projects </span>
        </h1>
        <div className="projects-elements">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 card">
              <img src={Img1} alt="img1" className="projects-image" />
              <h4 className="projects-heading">MASJITHUL AMAN MUSLIM JAMATH</h4>
              <p className="projects-summary">
                The MASJITHUL AMAN MUSLIM JAMATH website, built with HTML, CSS,
                and JavaScript, offers a visually appealing, interactive, and
                user-friendly platform showcasing mosque activities and
                services.
              </p>
              <a
                href="https://aravinth-s-731.github.io/masjithul-aman-webpage/"
                target="blank_"
                className="projects-button"
              >
                Visit Site
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 card">
              <img src={Img3} alt="img2" className="projects-image" />
              <h4 className="projects-heading">
                BUS BOOKING CENTER - RAV TRANSPORTS
              </h4>
              <p className="projects-summary">
                The BUS BOOKING CENTER project, developed in React.js, offers a
                seamless, user-friendly platform for booking bus tickets,
                featuring responsive design and efficient real-time updates.
              </p>
              <a
                href="https://rav-transports.netlify.app/"
                target="blank_"
                className="projects-button"
              >
                Visit Site
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 card">
              <img src={Img2} alt="img3" className="projects-image" />
              <h4 className="projects-heading"> DHANUSHRI ENTERPRICES </h4>
              <p className="projects-summary">
                The "DHANUSHRI ENTERPRICES" website, built with HTML, CSS, and
                JavaScript, features a modern design, responsive layout,
                intuitive navigation, and interactive elements for an engaging
                and efficient real-time updates. user experience.
              </p>
              <a
                href="https://voluble-begonia-e78151.netlify.app/"
                target="blank_"
                className="projects-button"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
