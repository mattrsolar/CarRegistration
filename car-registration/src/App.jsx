import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

const App = () => (
  <Router>
    <nav style={{ padding: "10px", marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/registration">Registration Status</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  </Router>
);

export default App;
