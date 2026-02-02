import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="login-page"
      style={{
        backgroundImage:
          "url(https://storage.123fakturera.se/public/wallpapers/sverige43.jpg)",
      }}
    >
      <LoginHeader />

      <div className="login-wrapper">
        <div className="login-card">
          <h1 className="login-title">Log in</h1>

          <label>Enter your email address</label>
          <input type="email" placeholder="Email address" />

          <label>Enter your password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />

            <i
              className={
                showPassword
                  ? "fa-regular fa-eye-slash eye"
                  : "fa-regular fa-eye eye"
              }
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <Link to="/dashboard"><button className="login-button">Log in</button></Link>

          <div className="login-links">
            <span>Register</span>
            <span>Forgotten password?</span>
          </div>
        </div>
      </div>

      <LoginFooter />
    </div>
  );
}

export default Login;
