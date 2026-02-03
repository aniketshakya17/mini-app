import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { t, ready } = useTranslation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  if (!ready) return null; 

  const handleLogin = async () => {
    setError("");

    try {
      const res = await fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || t("login.error"));
        return;
      }

      localStorage.setItem("token", data.accessToken);
      navigate("/dashboard");
    } catch {
      setError(t("login.serverError"));
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
          <h1 className="login-title">{t("login.title")}</h1>

          <label>{t("login.emailLabel")}</label>
          <input
            type="email"
            placeholder={t("login.email")}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>{t("login.passwordLabel")}</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={t("login.password")}
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

          {error && (
            <p className="error-text" style={{ color: "red" }}>
              {error}
            </p>
          )}

          <button className="login-button" onClick={handleLogin}>
            {t("login.button")}
          </button>

          <div className="login-links">
            <span>{t("login.register")}</span>
            <span>{t("login.forgot")}</span>
          </div>
        </div>
      </div>

      <LoginFooter />
    </div>
  );
}

export default Login;
