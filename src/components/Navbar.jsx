import React, { useState } from "react";
import "./components.css";
import logo from "../assets/logo.svg";

const Header = () => {
  const [closeMenu, setCloseMenu] = useState(true);

  const handleCloseMenu = () => {
    window.scrollTo(0, 0);
    setCloseMenu(true);
  };

  const handleMenuToggle = () => {
    setCloseMenu((prev) => !prev);
  };

  return (
    <div className="header-wrapper">
      <header className="container">
        <div
          className={
            closeMenu
              ? "header-container header-container-close"
              : "header-container"
          }
        >
          <input type="checkbox" name="" id="toggle" />
          <a className="navbar-brand" href="/" onClick={handleCloseMenu}>
            <img src={logo} alt="" />
          </a>

          <label
            htmlFor="toggle"
            className="navbar-toggler"
            onClick={handleMenuToggle}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>

          <ul className="nav-list">
            <li className="nav-item forum-nav">Startups</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">
              <button>Work with us!</button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
