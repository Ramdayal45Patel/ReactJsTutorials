import React from "react";
import "./Intro.css";
import "../../App.css";
import gitIncon from "../../assets/github.png";
import InstaIncon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";

import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import boy from "../../assets/boy.png";
import thumbup from "../../assets/thumbup.png";
import Crown from "../../assets/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import glassimoji from "../../assets/glassesimoji.png";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am</span>
          <span> Ram Dayal Patel</span>
          <span>
            Full Stack developer with high level experience in wed designing and
            development, producing the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={gitIncon} alt="" />
          <img src={linkedinIcon} alt="" />
          <img src={InstaIncon} alt="" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* Blur div */}
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238 210 255" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
