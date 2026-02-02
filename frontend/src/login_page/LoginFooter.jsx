import React from "react";
import "./LoginFooter.css";

function LoginFooter() {
  return (
    <footer className="login-footer">
      <div className="footer-top">
        <div className="footer-brand">123 Fakturera</div>

        <div className="footer-links">
          <span className="footer-links link">Home</span>
          <span className="footer-links link">Order</span>
          <span className="footer-links link">Contact us</span>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-copy">
        © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
      </div>
    </footer>
  );
}

export default LoginFooter;
