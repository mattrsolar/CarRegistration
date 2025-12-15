import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Registration from "./pages/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <Router>
    <div className="navbar">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
