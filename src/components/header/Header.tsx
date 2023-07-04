import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/icons/logo.png";

const Header = () => {
  return (
    <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
    
      {/* <div className={styles.menu}>
        <Link to="iAmTester" smooth={true} duration={500}>
          <span>I AM A TESTER</span>
        </Link>
        <Link to="offer" smooth={true} duration={500}>
          <span>WHAT DO I OFFER</span>
        </Link>
        <Link to="uniqueness" smooth={true} duration={500}>
          <span>MY UNIQUENESS</span>
        </Link>
        <Link to="superpower" smooth={true} duration={500}>
          <span>MY SUPERPOWER</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
