import React from "react";
import "./HeroSection.css";
import Typed from "react-typed";
import { MDBIcon } from "mdbreact";

const HeroSection = () => {
  const textLines = [
    "Organized by the Students of SOET KRMU",
    "In collaboration with Developer community",
    "In collaboration with IIT Delhi",
  ];
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      ></link>
      <div className="hero-container">
        <video src="/images/hero-section.mp4" autoPlay loop muted />
        <div className="name">
          <img
            className="hack-krmu-name"
            src="/images/hack-krmu.png"
            alt="krmu-written"
          />
          <div className="sub-heading">
            <div className="heading-1">
              <span className="heading-1">A 36-hour Hackathon </span>
              <span className="heading-2">
                <Typed
                  strings={textLines}
                  typeSpeed={60}
                  smartBackspace
                  backSpeed={60}
                  loop
                />
              </span>
            </div>
          </div>
          <div className="register">
            <a href="https://forms.gle/9Z7Z9Z7Z9Z7Z9Z7Z9" target="_blank">
              Register
            </a>
          </div>
          <div className="social">
            <div className="social-media">
              <div className="social-icon">
                <MDBIcon fab icon="facebook-f" />
              </div>
              <div className="social-icon">
                <MDBIcon fab icon="instagram" />
              </div>
              <div className="social-icon">
                <MDBIcon fab icon="twitter" />
              </div>
              <div className="social-icon">
                <MDBIcon fab icon="github" />
              </div>
            </div>
          </div>
          <div className="date-timing">
            <div className="date">
              <i class="far fa-calendar"></i>
              <span> 15th - 17th feb 2021</span>
            </div>
            <div className="date">
              <i class="far fa-clock"></i>
              <span> 12 PM Onwards</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
