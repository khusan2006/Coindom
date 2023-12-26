import React, { useState } from "react";
import { IconBrandDiscord, IconBrandTwitter, IconMenu2, IconX } from "@tabler/icons-react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({isScrolled}) => {
  const [isOpen, setIsOpen] = useState(false)

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
          <IconMenu2 className="hidden" onClick={() => setIsOpen(true)} />
        </div>
      </nav>
      
         <ul className={`mobile-menu ${isOpen && 'open'}`}>
          <IconX className="close-btn" onClick={() => setIsOpen(false)}/>
         <li className="mobile-link">
           <a onClick={() => setIsOpen(false)} href="#home">Home</a>
         </li>
         <li className="mobile-link">
           <a onClick={() => setIsOpen(false)} href="#market">Market</a>
         </li>
         <li className="mobile-link">
           <a onClick={() => setIsOpen(false)} href="#choose">Choose Us</a>
         </li>
         <li className="mobile-link">
           <a onClick={() => setIsOpen(false)} href="#join">Join</a>
         </li>
       </ul>
      

    </header>
  );
};

export default Navbar;
