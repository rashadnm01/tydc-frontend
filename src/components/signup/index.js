import React, { useState, useEffect } from "react";
import "./_signup.scss";
import { useNavigate } from "react-router-dom";
import { TYDCLogo } from "../../assets/tydc-logo";
import { signup } from "./helpers";
export const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failure, setFailure] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
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
  const onFirstNameChange = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const onLastNameChange = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  useEffect(() => {
    if (signedUp) {
      navigate("/signup-verification");
    }
  }, [signedUp]);
  return (
    <div className="signup-wrapper">
      <form
        type="submit"
        onSubmit={(e) =>
          signup(
            e,
            username,
            password,
            email,
            firstName,
            lastName,
            setSignedUp,
            setFailure
          )
        }
      >
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
            type="password"
            name="password"
            placeholder="password"
            onChange={onPasswordChange}
          />
        </div>
        <div className="input-wrapper">
          <div className="label">First Name:</div>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={onFirstNameChange}
          />
        </div>
        <div className="input-wrapper">
          <div className="label">Last Name:</div>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={onLastNameChange}
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
