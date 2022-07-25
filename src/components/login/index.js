import React, { useEffect, useState } from "react";
import { TYDCLogo } from "../../assets/tydc-logo";
import { useNavigate } from "react-router-dom";
import { login } from "./helpers";
import "./_login.scss";
export const Login = (props) => {
  const navigate = useNavigate();
  const [failure, setFailure] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const onUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  return (
    <div className="login-wrapper">
      <form
        type="submit"
        onSubmit={(e) => {
          login(e, username, password, setLoggedIn);
        }}
      >
        <TYDCLogo size={150} />
        <div className="form-title">Login</div>
        <div className="input-wrapper">
          <div className="label">Username:</div>
          <input
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={onUsernameChange}
          />
        </div>
        <div className="input-wrapper">
          <div className="label">Password:</div>
          <input
            name="password"
            value={password}
            placeholder="password"
            type="password"
            onChange={onPasswordChange}
          />
        </div>
        <input type="submit" value="Login" />
        <div className="footer-text">
          {failure ? (
            <div className="failure">
              Login attempt failed. Please try again!
            </div>
          ) : (
            ""
          )}
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
