import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RatingsInput from "./pages/Login/RatingsInput";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/rate-movies" component={RatingsInput} />
      </Routes>
    </div>
  );
};

export default App;