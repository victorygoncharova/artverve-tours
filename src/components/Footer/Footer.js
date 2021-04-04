import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { footer } = styles;
  return (
    <footer className={footer}>
      <span>© Artverve, 2021</span>
    </footer>
  );
};

export default Footer;
