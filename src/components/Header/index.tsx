import React from "react";
import styles from "./index.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo"></img>
      </div>
    </div>
  );
};

export default Header;
