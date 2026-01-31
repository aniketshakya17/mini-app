import React from "react";
import "./Header.css";

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="hamburger" onClick={onMenuClick} style={{backgroundColor:"#1e88e5" , border:"none"}}>
          <i class="fa-solid fa-bars" style={{color:"white"}}></i>
        </button>

        <img
          className="header-avatar"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
        />

        <div className="header-user-text">
          <div className="header-username">John Andre</div>
          <div className="header-company">Storfjord AS</div>
        </div>
      </div>

      <div className="header-right">
        <span>English</span>
        <img
          src="https://storage.123fakturere.no/public/flags/GB.png"
          alt="flag"
        />
      </div>
    </header>
  );
}

export default Header;
