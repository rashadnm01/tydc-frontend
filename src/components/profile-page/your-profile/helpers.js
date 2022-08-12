import { getCookie, setCookie } from "../../../assets/cookie-manual";
import React from "react";

export const getUser = (setUser) => {
  const userId = getCookie("user_id");
  if (userId) {
    fetch(process.env.REACT_APP_API + "users/" + userId)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.log(err));
  }
};

export const signOut = () => {
  setCookie("logged_in", false, 0);
  setCookie("username", null, -1);
  setCookie("user_id", null, -1);
};
