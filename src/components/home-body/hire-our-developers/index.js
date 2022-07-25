import React, { useState } from "react";
import { Developers } from "../../developers";
import { useNavigate } from "react-router-dom";
import "./_hire-our-developers.scss";
export const HireOurDevelopers = (props) => {
  const type = props.type;
  const navigate = useNavigate();
  return (
    <div className="hod-wrapper">
      <div className="hod-header">Hire Our {type} Developers</div>
      <div className="hod-body">
        <div className="body-title">
          <u onClick={() => navigate("/hire")}>View more on our hire page.</u>
        </div>
        <Developers />
      </div>
    </div>
  );
};
