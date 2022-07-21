import React from "react";
import { useNavigate } from "react-router-dom";
import "./_nav.scss";
export const Nav = () => {
  let navigate = useNavigate();
  return (
    <div className="nav">
      <div
        className="list-item"
        onClick={() => navigate("/", { replace: true })}
      >
        Home
      </div>
      <div
        className="list-item"
        onClick={() => navigate("/hire", { replace: true })}
      >
        Hire Our Developers
      </div>
      <div
        className="list-item"
        onClick={() => navigate("/about", { replace: true })}
      >
        About Us
      </div>
      <div
        className="list-item"
        onClick={() => navigate("/feedback", { replace: true })}
      >
        Leave Us Feedback
      </div>
    </div>
  );
};
