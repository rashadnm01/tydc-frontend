import "./App.scss";
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
function App() {
  var deviceWidth = window.innerWidth || 1000;
  var deviceHeight = window.innerHeight || 1000;
  return (
    <Container>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-verification" element={<SignupFlow />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
