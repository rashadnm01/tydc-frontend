import React from "react";
import "./_signup.scss";
import { useNavigate } from "react-router-dom";
import { TYDCLogo } from "../../assets/tydc-logo";
export const Signup = () => {
  const navigate = useNavigate();
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
          <div className="label">Email:</div>
          <input type="text" />
        </div>
        <div className="input-wrapper">
          <div className="label">Password:</div>
          <input type="text" />
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
            onClick={() => navigate("/login", { replace: true })}
          >
            Log in!
          </u>
        </div>
      </form>
    </div>
  );
};
