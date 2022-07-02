import "./App.scss";
import { Header } from "./components/header";
import { HomeBody } from "./components/home-body";
import { Routes, Route, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { TYDCLogo } from "./assets/tydc-logo";
import TYDCLogoAsSVG from "./assets/tydc-logo-as-svg.svg";

function App() {
  var deviceWidth = window.innerWidth || 1000;
  var deviceHeight = window.innerHeight || 1000;
  return (
    <Container>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeBody />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
