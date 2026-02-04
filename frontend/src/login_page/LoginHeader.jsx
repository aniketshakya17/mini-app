import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LoginHeader.css";

function LoginHeader() {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const languages = {
    en: {
      label: "English",
      flag: "https://storage.123fakturere.no/public/flags/GB.png",
    },
    sv: {
      label: "Svenska",
      flag: "https://storage.123fakturere.no/public/flags/SE.png",
    },
  };

  const currentLang = i18n.language || "en";

  useEffect(() => {
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <header className="login-header">
      <div className="header-left">
        <i
          className="fa-solid fa-bars hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        />

        <img
          src="https://storage.123fakturera.se/public/icons/diamond.png"
          alt="logo"
          className="logo"
        />
      </div>

      <nav className="nav-menu">
        <span className="link">{t("nav.home")}</span>
        <span className="link">{t("nav.order")}</span>
        <span className="link">{t("nav.customers")}</span>
        <span className="link">{t("nav.about")}</span>
        <span className="link">{t("nav.contact")}</span>
      </nav>

      <div className="header-right">
        <div
          className="lang-selected"
          onClick={(e) => {
            e.stopPropagation();
            setLangOpen((prev) => !prev);
          }}
        >
          <span>{languages[currentLang].label}</span>
          <img src={languages[currentLang].flag} alt={currentLang} />
        </div>

        {langOpen && (
          <div className="lang-menu" onClick={(e) => e.stopPropagation()}>
            {Object.entries(languages)
              .filter(([code]) => code !== currentLang)
              .map(([code, l]) => (
                <div
                  key={code}
                  className="lang-item"
                  onClick={() => changeLanguage(code)}
                >
                  <span>{l.label}</span>
                  <img src={l.flag} alt={code} />
                </div>
              ))}
          </div>
        )}
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <span>{t("nav.home")}</span>
          <span>{t("nav.order")}</span>
          <span>{t("nav.customers")}</span>
          <span>{t("nav.about")}</span>
          <span>{t("nav.contact")}</span>
        </div>
      )}
    </header>
  );
}

export default LoginHeader;
