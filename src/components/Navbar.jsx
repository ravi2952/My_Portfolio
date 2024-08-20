import React from "react";
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light" id="Navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Welcome <span> Dude</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#Project">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://drive.google.com/file/d/1X7rjneGg7sxi6cvc6IHjwJwRqDFhDDko/view?usp=sharing" download='Ravichandiran_resume.pdf' target="blank_">
                  My Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/ravi2952" download='Ravichandiran_resume.pdf' target="blank_">
                  Git Hub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
