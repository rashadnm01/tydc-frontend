import React, { useState } from "react";
import { Developer } from "./developer";
import "./_developers.scss";

export const Developers = (props) => {
  const [developers, setDevelopers] = useState(null);
  console.log(DUMMY_DEVELOPERS);
  return (
    <div className="developers-wrapper">
      {DUMMY_DEVELOPERS
        ? DUMMY_DEVELOPERS.map((developer) => <Developer dev={developer} />)
        : ""}
    </div>
  );
};

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
