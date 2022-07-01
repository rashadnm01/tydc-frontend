import React from "react";
import "./_home-body.scss";
import { HireOurDevelopers } from "./hire-our-developers";
import { AboutUs } from "./about-us";
import { LeaveFeedback } from "./leave-feedback";
export const HomeBody = () => {
  return (
    <div className="home-body-wrapper">
      <HireOurDevelopers />
      <div className="right-wrapper">
        <AboutUs />
        <LeaveFeedback />
      </div>
    </div>
  );
};
