import React from "react";
import "./_about-page.scss";
import { AboutUs } from "../home-body/about-us";
import { useNavigate } from "react-router-dom";
export const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="about-page-wrapper">
      <AboutUs fullPage={true} />

      <div className="more-info-wrapper">
        <div className="more-info-header">Want to be apart of TYDC?</div>
        <div className="more-info-body">
          <p>Developers</p>
          <span>
            If you are interested in joining TYDC as a developer, all you have
            to do is <u onClick={() => navigate("/signup")}>make an account</u>{" "}
            and <u>schedule an interview</u>!
          </span>
          <br />
          <p>Recruiters</p>
          <span>
            To join TYDC as a recruiter, it's the same process. We love to build
            a personal relationship with our recruiters, so our developers know
            that they can trust them!
          </span>
          <br />
        </div>
      </div>
    </div>
  );
};
