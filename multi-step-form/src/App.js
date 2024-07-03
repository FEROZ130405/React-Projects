import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/"> Home &emsp;</Link>
          <Link to="/user-details"> User Details </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
