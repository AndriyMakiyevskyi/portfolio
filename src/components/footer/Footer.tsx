import React from "react";
import { Link } from "react-scroll";
import styles from "./Footer.module.css";
import logo from "../../assets/icons/logo.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div style={{display: 'flex'}}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Link to="iAmTester" smooth={true} duration={500}>
            <h4 className={styles.navItem}>I AM A TESTER</h4>
          </Link>
          <Link to="offer" smooth={true} duration={500}>
            <h4 className={styles.navItem}>WHAT DO I OFFER</h4>
          </Link>
        </div>

        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Link to="uniqueness" smooth={true} duration={500}>
            <h4 className={styles.navItem}>MY UNIQUENESS</h4>
          </Link>
          <Link to="superpower" smooth={true} duration={500}>
            <h4 className={styles.navItem}>MY SUPERPOWER</h4>
          </Link>
        </div>
      </div>

      <img src={logo} alt="logo" className={styles.logo} />
    </div>
  );
};

export default Footer;
