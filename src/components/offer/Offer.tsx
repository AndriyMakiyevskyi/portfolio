import React from "react";
import missions from "../../assets/images/missions.png";
import freelance from "../../assets/images/freelance.png";
import free from "../../assets/images/free.png";
import apply from "../../assets/images/apply.png";
import notice from "../../assets/images/notice.png";
import work from "../../assets/images/work.png";
import styles from "./Offer.module.css";

const Offer = () => {
  return (
    <div className={styles.container} id="offer">
      <div className={styles.left}>
        <div style={{ position: "absolute", top: -690, zIndex: 10 }}>
          <h2 className={styles.headline}> I WORK UNIQUELY:</h2>
          <div className={styles.row}>
            <img src={missions} alt="missions" className={styles.leftImage} />
            <div className={styles.info}>
              <h3 className={styles.title}>
                You don't have a clear requirement!
              </h3>
              <h4 className={styles.text}>
                No problem, I can still work without it. You are still preparing
                the specification! No problem, I don't wait for that.
              </h4>
            </div>
          </div>
          <div className={styles.row}>
            <img src={freelance} alt="freelance" className={styles.leftImage} />
            <div className={styles.info}>
              <h3 className={styles.title}>You have a budget constraint!</h3>
              <h4 className={styles.text}>No worries, I would fit into it.</h4>
            </div>
          </div>
          <div className={styles.row}>
            <img src={free} alt="free" className={styles.leftImage} />
            <div className={styles.info}>
              <h3 className={styles.title}>
                You don't have any test cases/test plans/documents in place!
              </h3>
              <h4 className={styles.text}>
                No problem, that's where I come into the picture.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContainer}>
          <h2 className={styles.headline}>
            GIVE ME YOUR APPLICATION AND I'LL GIVE YOU THE DEFECTS IN IT
          </h2>
          <div className={styles.row}>
            <img src={apply} alt="apply" className={styles.leftImage} />
            <div className={styles.info}>
              <h3 className={styles.title}>Let me go through your product.</h3>
              <h4 className={styles.text}>
                And I would provide how to proceed with the testing & how
                effectively your application can be tested. I will come up with
                the best test cases/comprehensive test plans, important use
                cases and most importantly unique and incredible application
                improving and business fetching suggestions
              </h4>
            </div>
          </div>
          <div className={styles.row}>
            <img src={notice} alt="notice" className={styles.leftImage} />
            <div className={styles.info}>
              <h3 className={styles.title}>My job just doesn't end here.</h3>
              <h4 className={styles.text}>
                Once I verify the defects in all major browsers/OS, I log them
                in whatever format/tool you choose along with the screenshots &
                videos. I will be there to verify the resolved defects.
              </h4>
            </div>
          </div>
          <div className={styles.row}>
            <img src={work} alt="work" className={styles.leftImage} />
            <div className={styles.info}>
              <h3 className={styles.title}>
                If you still have some doubts, please take a look at the
                feedbacks provided my valuable clients.
              </h3>
              <h4 className={styles.text}>
                I deliver what I promise, I do not promise which I can not
                deliver.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
