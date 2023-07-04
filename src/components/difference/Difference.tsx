import React from "react";
import styles from "./Difference.module.css";
type Props = {};

const Difference = (props: Props) => {
  return (
    <div className={styles.container} id="uniqueness">
      <h2 className={styles.headline}>
        ⭐️You can get the next QA services when you work with me:
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: 580 }}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>WE CARE ABOUT OUR MEMBERS</h3>
            <h4 className={styles.cardText}>Knowledge of HTML, CSS, SQL</h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>WE VALUE YOUR OPINION</h3>
            <h4 className={styles.cardText}>Good understanding SDLC, STLC</h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              WE PROVIDE PERFORMANCE FEEDBACK
            </h3>
            <h4 className={styles.cardText}>
              Good understanding of Agile methodologies (Scrum, Kanban,
              Waterfall, V-model);
            </h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              WE PROVIDE PERFORMANCE FEEDBACK
            </h3>
            <h4 className={styles.cardText}>
              Experience in testing Web, Mobile, and Desktop Apps
            </h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              WE PROVIDE PERFORMANCE FEEDBACK
            </h3>
            <h4 className={styles.cardText}>Network protocol (HTTP, HTTPS)</h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              WE PROVIDE PERFORMANCE FEEDBACK
            </h3>
            <h4 className={styles.cardText}>
              Practice with bug tracking systems: Jira, YouTrack, Confluence
            </h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              WE PROVIDE PERFORMANCE FEEDBACK
            </h3>
            <h4 className={styles.cardText}>
              All device for testing: Android/ iOS/Windows/ Mac OSX/ Linux{" "}
            </h4>
          </div>
        </div>
        <div style={{ width: 580, marginTop: 27 }}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>WE SAVE YOUR TIME</h3>
            <h4 className={styles.cardText}>
              Knowledge of the QA-approaches, understanding of test design
              techniques
            </h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>WE BELIEVE IN OPEN DIALOGUE</h3>
            <h4 className={styles.cardText}>
              Experience in writing test documentation (test cases, checklists,
              test plans, bug reports)
            </h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>WE BELIEVE IN OPEN DIALOGUE</h3>
            <h4 className={styles.cardText}>
              Automation testing with Cypress, WebDriverIO, Appium , Selenium
            </h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>WE BELIEVE IN OPEN DIALOGUE</h3>
            <h4 className={styles.cardText}>
              Management tools (TestRail, Slack, GitHub)
            </h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>WE BELIEVE IN OPEN DIALOGUE</h3>
            <h4 className={styles.cardText}>API testing </h4>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>WE BELIEVE IN OPEN DIALOGUE</h3>
            <h4 className={styles.cardText}>
              Languages - JavaScript, TypeScript{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
