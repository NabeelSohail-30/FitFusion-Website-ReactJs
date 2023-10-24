import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../Assets/Styles.css"; // Correct the import file name

const NavBar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    const hamburgerButton = document.querySelector(".hamburger-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburgerButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      setMobileMenuActive(!mobileMenuActive); // Update state to manage "active" class
    });

    // Remove the event listener when the component unmounts
    return () => {
      hamburgerButton.removeEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        setMobileMenuActive(!mobileMenuActive);
      });
    };
  }, [mobileMenuActive]);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <h2>FitFusion</h2>
            </Link>
          </div>

          <div className="main-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/login" className="btn">
                  <FontAwesomeIcon icon={faUser} /> Log In
                </Link>
              </li>
            </ul>
          </div>
          <button className="hamburger-button">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
          <div className={`mobile-menu ${mobileMenuActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/login" className="btn">
                  <FontAwesomeIcon icon={faUser} /> Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
