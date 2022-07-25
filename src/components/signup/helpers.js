import React from "react";
import axios from "axios";
export const signup = (username, password, email) => {
  axios.post(
    process.env.REACT_APP_API + "users/signup",
    {
      username: username,
      password: password,
      email: email,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};
