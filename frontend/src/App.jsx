import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavbarPage from "./Component/NavBar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home/Home";
import Hotels from "./Component/Hotels/Hotels";
import Flights from "./Component/Fligths/Flights";
import Packages from "./Component/Packages/Packages";
import HotelsDetails from "./Component/HotelsDetails/HotelsDetails";
import Login from "./Component/Login/login";
import Register from "./Component/Login/Register"; 
import Footer from "./Component/Footer/Footer";
const App = () => {
  const navigate = useNavigate();

  return (
 
    <>
      
      <NavbarPage />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flight" element={<Flights />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotelsPage" element={<HotelsDetails />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
      <Footer />

    </>
  );
};

export default App;