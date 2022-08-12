import React from "react";
import { YourProfile } from "./your-profile";
import { getUser } from "./helpers";
import "./_profile-page.scss";

export const ProfilePage = (props) => {
  return (
    <div className="profile-page-wrapper">
      <YourProfile />
    </div>
  );
};
