import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RatingsInput from "./pages/Login/RatingsInput";
import MoviePage from "./Components/MoviePages/MoviePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RatingsInput />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;