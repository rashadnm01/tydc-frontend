import React, { useEffect, useState } from "react";
import "./_home-body.scss";
import { HireOurDevelopers } from "./hire-our-developers";
import { AboutUs } from "./about-us";
import { LeaveFeedback } from "./leave-feedback";
import { getCookie, setCookie } from "../../assets/cookie-manual";
export const HomeBody = (props) => {
  const dummyDevArr = [
    { field: "Front End" },
    { field: "Back End" },
    { field: "Full Stack" },
  ];
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);
  const [select, setSelect] = useState([0, "Front End"]);

  useEffect(() => {
    setLoggedIn(getCookie("logged_in"));
  }, []);
  return (
    <div className="my-home-body-wrapper">
      <div className="home-body-header">
        <div className="home-body-title">
          Welcome to The Young Developer Committee!
        </div>
        <div className="home-body-subtitle">
          <p>
            Are you currently searching for software developers to kickstart
            your startup?
          </p>
          <p>Look no more!</p>
          <p> Search our developer database!</p>
        </div>
      </div>
      <div className="home-body-wrapper">
        <HireOurDevelopers field={select[1]} />
        {/* <div className="carousel-select-wrapper">
            <div className="carousel-select">
              {dummyDevArr.map((dev, i) => (
                <Bubble
                  active={select[i] === dev.field}
                  select={select}
                  setSelect={setSelect}
                  dev={dev.field}
                  i={i}
                />
              ))}
            </div>
          </div> */}

        <div className="right-wrapper" style={{ height: "100%" }}>
          <AboutUs />
          <LeaveFeedback />
        </div>
      </div>
    </div>
  );
};
const Bubble = (props) => {
  const index = props.i;
  const dev = props.dev;

  return (
    <div
      style={{
        backgroundColor: props.active ? "#58BFCD" : "rgba(#868989, .5)",
      }}
      className="select"
      onClick={() => {
        props.setSelect([index, dev]);
      }}
    ></div>
  );
};
