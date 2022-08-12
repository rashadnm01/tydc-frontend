import React from "react";
import axios from "axios";
import { getCookie, setCookie } from "../../assets/cookie-manual";
export const signup = (
  e,
  username,
  password,
  email,
  firstName,
  lastName,
  setSignedUp,
  setFailure
) => {
  e.preventDefault();
  const data = {
    username: username,
    password: password,
    email: email,
    firstName: firstName,
    lastName: lastName,
  };
  fetch(process.env.REACT_APP_API + "users/signup", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      if (data.signedUp) {
        setSignedUp(data.signedUp);
        setCookie("logged_in", true, 1);
        setCookie("username", username, 1);
        setCookie("last_login", Date.now(), 30);
        setCookie("user_id", data.userId, 1);
      } else {
        setFailure(true);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
