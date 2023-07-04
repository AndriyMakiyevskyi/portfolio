import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./SuperPower.module.css";
import superman from "../../assets/images/superman.png";
import easy from "../../assets/images/easy.png";
import vsc from "../../assets/icons/tools/VSC.png";
import ws from "../../assets/icons/tools/WS.png";
import figma from "../../assets/icons/tools/Figma.png";
import android from "../../assets/icons/tools/android.png";
import jira from "../../assets/icons/tools/jira.png";
import trello from "../../assets/icons/tools/trelo.png";
import asana from "../../assets/icons/tools/asana.png";
import gitlab from "../../assets/icons/tools/gitlab.png";
import clickup from "../../assets/icons/tools/clickUp.png";
import azure from "../../assets/icons/tools/DOAzure.png";
import baseCamp from "../../assets/icons/tools/basecamp.png";
import postman from "../../assets/icons/tools/postman.png";
import github from "../../assets/icons/tools/githab.png";
import swagger from "../../assets/icons/tools/swager.png";
import browser from "../../assets/icons/tools/brawserstack.png";
import adobe from "../../assets/icons/tools/AdobeXD.png";
import invision from "../../assets/icons/tools/inVision.png";
import xRay from "../../assets/icons/tools/X-ray-jira.png";
import testRail from "../../assets/icons/tools/testrall.png";
import rainForest from "../../assets/icons/tools/rainforest.png";
import monitor from "../../assets/images/projects/Monitor XDR.png";
import laptopStudio from "../../assets/images/projects/Surface Laptop Studio.png";
import pixelBookGo from "../../assets/images/projects/PixelBook Go.png";
import macBookPro16 from "../../assets/images/projects/MacBook Pro 16.pnh.png";
import megogo from "../../assets/images/projects/Surface Laptop Megogo.png";
import iMac24 from "../../assets/images/projects/iMac 24 inch.png";
import iMac24api from "../../assets/images/projects/iMac 24 api.png";
import commercial from "../../assets/images/projects/Commercial.png";
import mobile from "../../assets/images/projects/MacBoo_mobile.png";
import iPad2020 from "../../assets/images/projects/iPad Pro 2020.png";
import iPhone12 from "../../assets/images/projects/iPhone 12 Pro (Wooden Hands).png";
import "./styles.css";

const SuperPower = () => {
  return (
    <div className={styles.container} id="superpower">
      <h2 className={styles.mainHeadline}>RECENT PROJECTS</h2>
      <div className={styles.slider}>
        <Carousel
          autoPlay={false}
          interval={2000}
          infiniteLoop={true}
          centerSlidePercentage={35}
          centerMode={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={monitor} alt="monitor" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>TestProject Agent</h3>
              <p className={styles.cardText}>
                The project was about testing the TestProject Agent.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={laptopStudio} alt="laptopStudio" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>
                Pixel-perfect testing (UI testing)
              </h3>
              <p className={styles.cardText}>
                Lerisque enim ligula venenatis dolor. Maecenas nisl est,
                ultrices nec congue eget, auctor vitae massa. Fusce luctus
                vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={pixelBookGo} alt="pixelBookGo" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>Crypto currency app</h3>
              <p className={styles.cardText}>
                Lerisque enim ligula venenatis dolor. Maecenas nisl est,
                ultrices nec congue eget, auctor vitae massa. Fusce luctus
                vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed
                ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis
                imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
                venenatis. Integer fringilla congue eros non fermentum. Sed
                dapibus pulvinar nibh tempor porta.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={macBookPro16} alt="macBookPro16" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>Testing online casino games</h3>
              <p className={styles.cardText}>
                Lerisque enim ligula venenatis dolor. Maecenas nisl est,
                ultrices nec congue eget, auctor vitae massa. Fusce luctus
                vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed
                ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis
                imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
                venenatis. Integer fringilla congue eros non fermentum. Sed
                dapibus pulvinar nibh tempor porta.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={megogo} alt="megogo" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>UI/UX testing for the site</h3>
              <p className={styles.cardText}>
                I tested the whole website on Android, iOS and Desktop and
                provided the issues in a well-mannered document file.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={iMac24} alt="iMac24" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>My experience with SQL</h3>
              <p className={styles.cardText}>
                My task was to test SQL on the project. I worked with a lot of
                tables that were created for the project. I made queries to get
                data from different tables.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={iMac24api} alt="iMac24api" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>
                Testing of API of the web applications
              </h3>
              <p className={styles.cardText}>
                My client needed to test the API and check the correctness of
                the data processing. I tested the API on the provided
                documentation using the Postman application. The result of the
                work was a bug report and a collection of requests in the
                exported json file.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={commercial} alt="commercial" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>
                Testing of the order process of commercial website
              </h3>
              <p className={styles.cardText}>
                My task was testing the order process of the commercial website.
                I performed the testing on various desktop and mobile browsers
                and provided results as tickets in the Jira bug tracker.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={mobile} alt="mobile" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>Mobile testing</h3>
              <p className={styles.cardText}>
                My client needed to test the shop application for mobile
                platforms. My duties was checking all features of application
                and creatiion detailed test report about found bugs. I provided
                the QA service which included UI/UX testing, functional testing
                and cross-OS testing.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={iPad2020} alt="iPad2020" />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>
                Monthly website security review.
              </h3>
              <p className={styles.cardText}>
                My client needed to perform monthly security testing of four
                websitesusing various online security tools. I provided this
                service one time a month and sent detailed reports after each
                round of testing.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div style={{ height: "50%" }}>
              <img src={iPhone12} alt="iPhone12" className={styles.iPhone12} />
            </div>
            <div style={{ height: "50%" }}>
              <h3 className={styles.cardTitle}>
                Software testing of Web, IOS and Android apps for online
                marketplace.
              </h3>
              <p className={styles.cardText}>
                My client needed to check admin dashboard of web application of
                the market portal + web application, iOS applications and
                Android application. I performed functionality and UI testing
                and provided detailed test report as result of the work with
                description how to fix found bugs.
              </p>
            </div>
          </div>
        </Carousel>
      </div>

      <div className={styles.superpower}>
        <div
          style={{
            borderColor: "#e63d3d",
            borderWidth: 5,
            borderStyle: "solid",
            padding: 15,
            paddingBottom: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: 150,
            paddingRight: 150,
          }}
        >
          <h2 className={styles.headline}>My superpowers</h2>
          <h4 className={styles.subHeadline}>
            I use a wide range of technologies and tools. If you do not know how
            best to implement your project - contact me and I will be glad to
            consult you.
          </h4>
          <div className={styles.icons}>
            <img src={vsc} alt="vsc" />
            <img src={ws} alt="ws" />
            <img src={figma} alt="figma" />
            <img src={android} alt="android" />
            <img src={jira} alt="jira" />
          </div>
          <div className={styles.icons}>
            <img src={swagger} alt="swagger" />
            <img src={trello} alt="trello" />
            <img src={asana} alt="asana" />
            <img src={gitlab} alt="gitlab" />
            <img src={clickup} alt="clickup" />
          </div>
          <div className={styles.icons}>
            <img src={azure} alt="asure" />
            <a
              href="https://github.com/AndriyMakiyevskyi"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github" />
            </a>
            <img src={baseCamp} alt="baseCamp" />
            <img src={postman} alt="postman" />
            <img src={browser} alt="browser" />
          </div>
          <div className={styles.icons}>
            <img src={adobe} alt="adobe" />
            <img src={invision} alt="inVision" />
            <img src={xRay} alt="xRay" />
            <img src={testRail} alt="testRail" />
            <img src={rainForest} alt="rainForest" />
          </div>
        </div>
      </div>

      <img src={superman} alt="superman" className={styles.superman} />
      <img src={easy} alt="easy" className={styles.easy} />
    </div>
  );
};

export default SuperPower;
