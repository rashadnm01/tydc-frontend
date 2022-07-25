import React, { useState, useEffect } from "react";
import { TYDCLogo } from "../../../assets/tydc-logo";
import { useNavigate } from "react-router-dom";
export const SignupFlow = () => {
  const navigate = useNavigate();
  const [devType, setDevType] = useState();
  return (
    <div className="signup-flow-wrapper">
      <form type="submit">
        <TYDCLogo size={150} />
        <div className="form-title">Sign Up</div>
        <div className="input-wrapper">
          <div className="label">
            Are you signing up as a software developer or recruiter?
          </div>
          <div className="left">Software Developer</div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <div className="right">Recruiter</div>
        </div>
        <div className="input-wrapper">
          <div className="label">Email:</div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="input-wrapper">
          <div className="label">Password:</div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="agree">
          <input type="checkbox" />
          <span>
            Agree to <u>Privacy Policy</u> and <u>Terms & Conditions</u>.
          </span>
        </div>
        <input type="submit" value="Sign up" />
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
