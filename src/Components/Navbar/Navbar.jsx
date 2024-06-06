import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Photos/logo.png";
import { Link } from "react-scroll";
import menuIcon from "../Photos/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });

  const [mobilemenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobilemenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <img src={logo} className="logo" alt=""></img>
        </Link>
        <ul className={mobilemenu ? "" : "hide-mobile-menu"}>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testinomials" smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
              className="btn"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <img src={menuIcon} alt="" className="menu-icon" onClick={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
