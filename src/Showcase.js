import React from "react";
import "./Showcase.css";
import logo from "./images/logo.png";

function Showcase() {
  return (
    <header className="showcase">
      <div className="showcase-top">
        <img src={logo} alt="Netflix" />
        <a className="btn" href="#">
          Sign In
        </a>
      </div>
      <div className="showcase-content">
        <h1> Unlimited movies, TV shows, and more. </h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <a className="btn btn-large" href="#">
          Watch free for 30 days <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </header>
  );
}

export default Showcase;
