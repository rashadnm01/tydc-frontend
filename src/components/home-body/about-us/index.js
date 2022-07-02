import React from "react";
import "./_about-us.scss";

export const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-header">About Us</div>
      <div className="about-us-body">
        <span>
          {" "}
          The Young Developer Committee was created to give exposure to the best
          junior developers looking for remote positions.{" "}
        </span>
        <br />
        <span>
          You can show your support by contacting our developers about job
          offers and positions!
        </span>
        <br />
        <span style={{ color: "white" }}>
          <u>Click here to learn more!</u>
        </span>
      </div>
    </div>
  );
};
