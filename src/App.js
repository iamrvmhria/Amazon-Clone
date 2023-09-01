import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header"
function App() {
return (
  <div className="app">
    {/* <Router> */}
      <Routes>
      <Route path="/" element={<><Header/><Home/></>} />
      </Routes>
    {/* </Router> */}
  </div>
);
}
export default App;