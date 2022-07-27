import React from "react";
import axios from "axios";
export const login = (e, username, password, setLoggedIn, setFailure) => {
  e.preventDefault();
  const data = { username: username, password: password };
  fetch(process.env.REACT_APP_API + "users/login", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      if (data.loggedIn) {
        setLoggedIn(data.loggedIn);
      } else {
        setFailure(true);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
