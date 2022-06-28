import React from "react";
import { Developer } from "./developer";
import "./_developers.scss";

export const Developers = () => {
  const DUMMY_DEVELOPERS = [
    {
      id: "0",
      firstName: "Rashad",
      middleName: "N",
      lastName: "Muhammad",
      skills: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "NodeJs",
        "Express",
        "Scala",
        "AWS",
        "Heroku",
      ],
      phone: "773-230-8360",
    },
  ];
  return (
    <div className="developers-wrapper">
      <Developer />
    </div>
  );
};
