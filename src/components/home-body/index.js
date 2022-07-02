import React, { useEffect, useState } from "react";
import "./_home-body.scss";
import { HireOurDevelopers } from "./hire-our-developers";
import { AboutUs } from "./about-us";
import { LeaveFeedback } from "./leave-feedback";
export const HomeBody = () => {
  const dummyDevArr = [
    { type: "Front End" },
    { type: "Back End" },
    { type: "Full Stack" },
  ];
  const [select, setSelect] = useState([0, "Front End"]);

  return (
    <div className="home-body-wrapper">
      <div className="developer-carousel">
        <HireOurDevelopers type={select[1]} />
        <div className="carousel-select">
          {dummyDevArr.map((dev, i) => (
            <Bubble active={true} onClick={() => setSelect([i, dev.type])} />
          ))}
        </div>
      </div>
      <div className="right-wrapper">
        <AboutUs />
        <LeaveFeedback />
      </div>
    </div>
  );
};
const Bubble = (props) => (
  <div
    style={{ backgroundColor: props.active ? "#58BFCD" : "rgba(#868989, .5)" }}
    className="select"
    onClick={props.onClick()}
  ></div>
);
