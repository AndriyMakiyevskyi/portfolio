import React from "react";
import { FaYoutube } from "react-icons/fa";

import AreYou from "../../assets/images/areyou.png";
import upwork from "../../assets/icons/upwork.png";
import styles from "./IAmTester.module.css";

const IAmTester = () => {
  return (
    <div className={styles.container} id="iAmTester">
      <img src={AreYou} alt="areyou" className={styles.areyou} />\
      <a target="_blank" rel="noreferrer" href="https://youtu.be/2I082luIV1g">
        <FaYoutube
          color="red"
          size={80}
          style={{ position: "absolute", top: 390, zIndex: 15, left: '48.2%' }}
        />{" "}
      </a>
      <div className={styles.info}>
        <h1 className={styles.headline}>I AM A TESTER</h1>
        <h2 className={styles.text}>
          Senior QA engineer with 5+ years of exp.
        </h2>
        <button className={styles.btn}>
          <a
            rel="noreferrer"
            href="https://www.upwork.com/freelancers/~01efb9d61b7b5b91fe"
            target="_blank"
          >
            Contact me
            <img src={upwork} alt="upwork" className={styles.upwork} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default IAmTester;
