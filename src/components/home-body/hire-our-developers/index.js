import React, { useState } from "react";
import { Developers } from "../../developers";
import "./_hire-our-developers.scss";
export const HireOurDevelopers = (props) => {
  const type = props.type;
  return (
    <div className="hod-wrapper">
      <div className="hod-header">Hire Our {type} Developers</div>
      <div className="hod-body">
        <Developers />
      </div>
    </div>
  );
};
