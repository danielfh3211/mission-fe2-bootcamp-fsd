import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import UserIcon from "../assets/user.png";

const Header = () => (
  <header className="header beranda-header">
    <img src={Logo} alt="Logo" className="logo" />
    <button className="hamburger" id="hamburger-btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className="header-right">
      <Link to="/">Kategori</Link>
      <img src={UserIcon} alt="User" className="user-icon" />
    </div>
  </header>
);

export default Header;
