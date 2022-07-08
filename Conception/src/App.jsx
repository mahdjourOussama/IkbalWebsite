import React from "react";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
/* import SideBar from "./Component/SideBar/SideBar"; */
/* <SideBar /> */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
