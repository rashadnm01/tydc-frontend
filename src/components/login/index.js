import React from "react";
import { TYDCLogo } from "../../assets/tydc-logo";
import { useNavigate } from "react-router-dom";
import "./_login.scss";
export const Login = (props) => {
  const navigate = useNavigate();
  return (
    <div className="login-wrapper">
      <form type="submit">
        <TYDCLogo size={150} />
        <div className="form-title">Login</div>
        <div className="input-wrapper">
          <div className="label">Username:</div>
          <input type="text" />
        </div>
        <div className="input-wrapper">
          <div className="label">Password:</div>
          <input type="text" />
        </div>
        <input type="submit" value="Login" />
        <div className="footer-text">
          Don't have an account?{" "}
          <u
            style={{ color: "white" }}
            onClick={() => navigate("/signup", { replace: true })}
          >
            Sign up!
          </u>
        </div>
      </form>
    </div>
  );
};
