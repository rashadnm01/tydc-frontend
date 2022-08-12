import "./App.scss";
import BackgroundImg from "./assets/bckgrnd1.jpg";
import { Header } from "./components/header";
import { HomeBody } from "./components/home-body";
import { Routes, Route, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { TYDCLogo } from "./assets/tydc-logo";
import TYDCLogoAsSVG from "./assets/tydc-logo-as-svg.svg";
import { Login } from "./components/login";
import { Signup } from "./components/signup";
import { HirePage } from "./components/hire-page";
import { AboutPage } from "./components/about-page";
import { FeedbackPage } from "./components/feedback-page";
import { SignupFlow } from "./components/signup/signup-flow";
import { getCookie, setCookie } from "./assets/cookie-manual";
import React, { useState, useEffect } from "react";
import { ProfilePage } from "./components/profile-page";
function App() {
  var deviceWidth = window.innerWidth || 1000;
  var deviceHeight = window.innerHeight || 1000;

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(getCookie("logged_in"));
  }, []);
  return (
    <Container>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeBody loggedIn={loggedIn} />} />
          <Route path="/login" element={<Login loggedIn={loggedIn} />} />
          <Route path="/signup" element={<Signup loggedIn={loggedIn} />} />
          <Route
            path="/signup-verification"
            element={<SignupFlow loggedIn={loggedIn} />}
          />
          <Route path="/hire" element={<HirePage loggedIn={loggedIn} />} />
          <Route path="/about" element={<AboutPage loggedIn={loggedIn} />} />
          <Route
            path="/feedback"
            element={<FeedbackPage loggedIn={loggedIn} />}
          />
          <Route path="/profile" element={<ProfilePage loggedIn />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
