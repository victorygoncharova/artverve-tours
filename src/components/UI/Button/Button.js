import React from "react";
import styles from "./Button.module.scss";

const Button = ({ src, children }) => {
  const { btnClass } = styles;
  return (
    <a href={src} target="blank" className={btnClass}>
      {children}
    </a>
  );
};

export default Button;
