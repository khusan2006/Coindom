import React from "react";
import { IconBrandDiscord, IconBrandTwitter } from "@tabler/icons-react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({isScrolled}) => {

  return (
    <header className={isScrolled ? 'fixed': ''}>
      <nav>
        <Link to='/' className="logo">COINDOM</Link>
        <ul className="links">
          <li className="link">
            <a href="#home">Home</a>
          </li>
          <li className="link">
            <a href="#market">Market</a>
          </li>
          <li className="link">
            <a href="#choose">Choose Us</a>
          </li>
          <li className="link">
            <a href="#join">Join</a>
          </li>
        </ul>
        <div className="icons">
          <IconBrandDiscord className="icon" />
          <IconBrandTwitter className="icon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
