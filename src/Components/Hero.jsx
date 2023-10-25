import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "../Assets/Styles.css";
import HeroImage from "../Assets/images/pxfuel.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImage} alt="Hero" />
      <div className="container">
        <div className="hero-content text-center">
          <h1 className="hero-heading text-xxl">
            Transform Your Life with FitFusion!
          </h1>
          <p className="hero-text text-md">
            Empowering Your Journey to Wellness, One Step at a Time
          </p>
          <div className="hero-buttons">
            <Link to="/" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/" className="btn">
              <FontAwesomeIcon icon={faDumbbell} /> Explore Our Workouts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
