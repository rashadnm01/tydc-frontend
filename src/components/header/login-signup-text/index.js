import React from "react";
import { useNavigate } from "react-router-dom";
import "./_login-signup-text.scss";
export const LoginSignupText = () => {
  const navigate = useNavigate();
  return (
    <div className="login-signup-text">
      Have an account? <br />{" "}
      <u onClick={() => navigate("/login", { replace: true })}>Login</u>, or{" "}
      <u onClick={() => navigate("/signup", { replace: true })}>sign up</u>.
    </div>
  );
};
