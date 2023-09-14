import React, { useState } from "react";
import "./components.css";
import logo from "../assets/logo.svg";
import hammenu from "../assets/menu.png";
import close from "../assets/close.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header>
      <img src={logo} alt="" />
      <nav className={menu ? "show-menu" : "hide-menu"}>
        <a href="/">Startups</a>
        <a href="/">Contact</a>
        <button>Work with us!</button>
      </nav>
      {menu ? (
        <img onClick={toggleMenu} className="ham-menu" src={close} alt="" />
      ) : (
        <img onClick={toggleMenu} className="ham-menu" src={hammenu} alt="" />
      )}
    </header>
  );
};

export default Navbar;
