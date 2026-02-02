import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const res = await fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.accessToken);

      navigate("/dashboard");
    } catch (err) {
      setError("Server not reachable");
    }
  };

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
          <input
            type="email"
            placeholder="Email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Enter your password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {error && <p className="error-text" style={{color:"red"}}>{error}</p>}
          <button className="login-button" onClick={handleLogin}>Log in</button>

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
