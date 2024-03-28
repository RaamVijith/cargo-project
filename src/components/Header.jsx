import React from "react";
import "../styles/Header.css";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
    </header>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="header--nav">
        <div className="nav--logo">
          <a href="#home">
            <div className="logo--inside">
            <h2>Cargo</h2>
            <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kDE6bFQpftT8_uRafuv7dwOLb0aCZMHFWg&s" />
            </div>
          </a>
        </div>
      </nav>

      <div className="header--right">
        <ul className="nav--list">
          <li>
            <a  href="#home">HOME</a>
          </li>
          <li>
            <a href="#welcomePage">PAGES</a>
          </li>
          <li>
            <a href="#service">TRACKING</a>
          </li>
          <li>
            <a href="#service">SERVICES</a>
          </li>
          <li>
            <a href="#news">BLOG</a>
          </li>
        </ul>
        <div className="button1">
          <button> GET A GUIDE</button>
        </div>
        <div className="button2">
          <button> SIGN IN</button>
        </div>

        <div className="option-button">
          <button>
            <FiAlignJustify className="option-button-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
