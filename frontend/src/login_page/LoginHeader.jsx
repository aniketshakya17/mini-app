import React, { useState } from "react";
import "./LoginHeader.css";

function LoginHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="login-header">
      <div className="header-left">
        <i
          className="fa-solid fa-bars hamburger"
          onClick={() => setOpen(!open)}
        ></i>

        <img
          src="https://storage.123fakturera.se/public/icons/diamond.png"
          alt="logo"
          className="logo"
        />
      </div>

      <nav className="nav-menu">
        <span>Home</span>
        <span>Order</span>
        <span>Our Customers</span>
        <span>About us</span>
        <span>Contact Us</span>
      </nav>

      <div className="header-right">
        <span className="lang">
          English
          <img
            src="https://storage.123fakturere.no/public/flags/GB.png"
            alt="en"
          />
        </span>
      </div>

      {open && (
        <div className="mobile-menu">
          <span>Home</span>
          <span>Order</span>
          <span>Our Customers</span>
          <span>About us</span>
          <span>Contact Us</span>
        </div>
      )}
    </header>
  );
}

export default LoginHeader;
