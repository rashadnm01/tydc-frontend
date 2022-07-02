import React from "react";
import "./_signup.scss";
import { TYDCLogo } from "../../assets/tydc-logo";
export const Signup = () => {
  return (
    <div className="signup-wrapper">
      <form type="submit">
        <TYDCLogo size={150} />
        <div className="form-title">Sign Up</div>
        <div className="input-wrapper">
          <div className="label">Username:</div>
          <input type="text" />
        </div>
        <div className="input-wrapper">
          <div className="label">Password:</div>
          <input type="text" />
        </div>
        <input type="submit" value="Sign up" />
        <div className="footer-text">
          Have an account? <u style={{ color: "white" }}>Log in!</u>
        </div>
      </form>
    </div>
  );
};
