import React from "react";
import "./_header.scss";
import { TYDCLogo } from "../../assets/tydc-logo";
import { Nav } from "./nav";
import { LoginSignupText } from "./login-signup-text";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <TYDCLogo size={125} />
      <Nav />
      <LoginSignupText />
    </div>
  );
};

// export const Header2 = () => {
//     return <div className="header2-wrapper"></div>
// }
