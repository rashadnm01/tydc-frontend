import React, { useState } from "react";
import { Developers } from "../../developers";
import "./_hire-our-developers.scss";
export const HireOurDevelopers = () => {
  const [type, setType] = useState("Front End");
  return (
    <div className="hod-wrapper">
      <div className="hod-header">
        <u>Hire Our {type} Developers</u>
      </div>
      <div className="hod-body">
        <Developers />
      </div>
    </div>
  );
};
