import React, { useState } from "react";
import Logo from "../../Images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        {/* logo */}
        <img src={Logo} alt="" className="h-20" />

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-dark">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 text-black">
          <li className="px-3.5">
            <a href="#" className="navlinks">
              Home
            </a>
          </li>
          <li className="px-3.5">
            <a href="#" className="navlinks">
              About
            </a>
          </li>
          <li className="px-3.5">
            <a href="#" className="navlinks">
              Projects
            </a>
          </li>
          <li className="px-3.5">
            <a href="#" className="navlinks">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* mobile-Menu */}
      {!isMenuOpen ? (
        <ul className="flex-col md:hidden">
          <li className="py-4">
            <a href="#" className="navlinks">
              Home
            </a>
          </li>
          <li className="py-4">
            <a href="#" className="navlinks">
              About
            </a>
          </li>
          <li className="py-4">
            <a href="#" className="navlinks">
              Projects
            </a>
          </li>
          <li className="py-4">
            <a href="#" className="navlinks">
              Contact
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;
