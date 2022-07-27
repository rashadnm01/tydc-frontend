import React from "react";
import axios from "axios";
export const signup = (
  e,
  username,
  password,
  email,
  setSignedUp,
  setFailure
) => {
  e.preventDefault();
  const data = { username: username, password: password, email: email };
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
      } else {
        setFailure(true);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
