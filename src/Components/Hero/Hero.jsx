import React from "react";
import "./Hero.css";
import dark_arrow from "../Photos/dark-arrow.png";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>We Ensure better education for better world</h1>
          <p>
            Our cutting-edge curriculam is desinged to empower students with the
            knowlegde,skills,and experiences needed to excel in the dynamic
            field of education
          </p>
          <button className="btn">
            Explore More<img src={dark_arrow}></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
