import React from "react";
import { useTranslation } from "react-i18next";
import "./LoginFooter.css";

function LoginFooter() {
  const { t } = useTranslation();

  return (
    <footer className="login-footer">
      <div className="footer-top">
        <div className="footer-brand">
          {t("footer.brand")}
        </div>

        <div className="footer-links">
          <span className="footer-link">{t("footer.home")}</span>
          <span className="footer-link">{t("footer.order")}</span>
          <span className="footer-link">{t("footer.contact")}</span>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-copy">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}

export default LoginFooter;
