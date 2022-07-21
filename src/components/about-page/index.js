import React from "react";
import "./_about-page.scss";
import { AboutUs } from "../home-body/about-us";
export const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <AboutUs fullPage={true} />

      <div className="more-info"></div>
    </div>
  );
};
