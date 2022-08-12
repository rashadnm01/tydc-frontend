import React, { useState, useEffect } from "react";
import "./_your-profile.scss";
import DefaultPic from "../../../assets/default-pfp.png";
import { useNavigate } from "react-router-dom";
import { getUser, signOut } from "./helpers";
export const YourProfile = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [updating, setUpdating] = useState(false);
  useEffect(() => {
    if (!user) {
      getUser(setUser);
    }
  }, []);
  return (
    <div className="your-profile-wrapper">
      <div className="your-profile-title">Your Profile</div>
      <div className="your-profile-body">
        {user && (
          <div className="profile-tiles">
            <div className="profile-comp-wrap">
              <div className="profile-tile">Username:</div>
              <div className="profile-tile">{user.username}</div>
            </div>
            <div className="profile-comp-wrap">
              <div className="profile-tile">Name:</div>
              <div className="profile-tile">
                {user.firstName + " " + user.lastName}
              </div>
            </div>
            <div className="profile-comp-wrap">
              <div className="profile-tile">Skills:</div>
              <div className="profile-tile skills-tile">
                {user.skills.length > 0 ? (
                  user.skills.map((skill) => (
                    <SkillTile updating={updating} skill={skill} />
                  ))
                ) : (
                  <SkillTile updating={updating} skill="" />
                )}
                <div
                  className="updating"
                  onClick={() => {
                    setUpdating(!updating);
                  }}
                >
                  {updating ? "+" : "-"}
                </div>
              </div>
            </div>
            <div
              className="profile-tile"
              onClick={() => {
                signOut();
                navigate("/login");
              }}
            >
              Sign Out
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const SkillTile = (updating, skill) => {
  return (
    <>
      <input
        type="text"
        value={skill.skill}
        style={{
          width: "4rem",
          background: "black",
          color: "white",
          textAlign: "center",
          margin: "0 0.2rem",
        }}
        disabled={updating.updating}
      />
      {!updating.updating ? <div className="updating">-</div> : ""}
    </>
  );
};
