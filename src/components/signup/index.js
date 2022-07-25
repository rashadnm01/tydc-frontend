import React, { useState } from "react";
import "./_signup.scss";
import { useNavigate } from "react-router-dom";
import { TYDCLogo } from "../../assets/tydc-logo";
export const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const onEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  return (
    <div className="signup-wrapper">
      <form type="submit">
        <TYDCLogo size={150} />
        <div className="form-title">Sign Up</div>
        <div className="input-wrapper">
          <div className="label">Username:</div>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={onUsernameChange}
          />
        </div>
        <div className="input-wrapper">
          <div className="label">Email:</div>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={onEmailChange}
          />
        </div>
        <div className="input-wrapper">
          <div className="label">Password:</div>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={onPasswordChange}
          />
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
