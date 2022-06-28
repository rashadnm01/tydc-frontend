import "./App.scss";
import { Header } from "./components/header";
import { HomeBody } from "./components/home-body";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeBody />} />
      </Routes>
    </div>
  );
}

export default App;
