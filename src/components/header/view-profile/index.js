import React from "react";
import { useNavigate } from "react-router-dom";
export const ViewProfile = (props) => {
  const navigate = useNavigate();
  return (
    <div className="view-profile-wrapper">
      <div className="view-profile-title" onClick={() => navigate("/profile")}>
        View Profile
      </div>
    </div>
  );
};
