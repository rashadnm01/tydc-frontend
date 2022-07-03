import React from "react";
import "./_developer.scss";
import DefaultPic from "../../../assets/default-pfp.png";
export const Developer = (props) => {
  const dev = props.dev;
  console.log(dev);
  return (
    <div className="developer-wrapper">
      <div className="profile-pic-wrapper">
        <img src={DefaultPic} rel="profile-pic" style={{ width: "100%" }} />
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
