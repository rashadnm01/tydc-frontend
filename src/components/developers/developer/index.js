import React, { useEffect } from "react";
import "./_developer.scss";
import DefaultPic from "../../../assets/default-pfp.png";
import { useRef } from "react";
export const Developer = (props) => {
  const dev = props.dev;
  const ref = useRef(null);
  return (
    <div
      className="developer-wrapper"
      ref={ref}
      style={{
        width:
          ref?.current?.offsetWidth || 0 / window.screen.width > 0.9
            ? "100%"
            : "28%",
      }}
    >
      <div className="profile-pic-wrapper">
        <img
          src={DefaultPic}
          rel="profile-pic"
          style={{ height: "80%", width: "90%" }}
        />
        <div className="profile-name">
          <div>{dev.firstName}</div>
          <div>{dev.lastName}</div>
        </div>
      </div>
      <div className="skills-wrapper">
        <div className="skills-title">Skills</div>
        {dev.skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  );
};

export const Skill = (props) => (
  <div className="skill-wrapper">{props.skill}</div>
);
