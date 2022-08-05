import React, { useState, useEffect } from "react";
import { TYDCLogo } from "../../../assets/tydc-logo";
import { useNavigate } from "react-router-dom";
import "./_signup-flow.scss";
export const SignupFlow = () => {
  const navigate = useNavigate();
  const [devType, setDevType] = useState();
  const [checked, setChecked] = useState("dev");
  return (
    <div className="signup-flow-wrapper">
      <form type="submit" onSubmit={() => navigate("/")}>
        <TYDCLogo size={150} />
        <div className="form-title">Sign Up</div>
        <div className="input-wrapper">
          <div className="label">
            Are you signing up as a software developer or recruiter?
          </div>
          <div className="switch-wrapper">
            <div className="switch-inner">
              <div className="left">Software Developer</div>
              <label class="switch">
                <input
                  type="radio"
                  name="user-type"
                  onClick={() => setDevType("developer")}
                />
                <span class="slider round"></span>
              </label>
            </div>

            <div className="switch-inner">
              <div className="right">Recruiter</div>
              <label class="switch">
                <input
                  type="radio"
                  name="user-type"
                  value="recruiter"
                  onClick={() => setDevType("recruiter")}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <input type="submit" value="Continue" />
        <div className="footer-text">
          Have an account?{" "}
          <u
            style={{ color: "white" }}
            onClick={() => {
              navigate("/login", { replace: true });
            }}
          >
            Log in!
          </u>
        </div>
      </form>
    </div>
  );
};
