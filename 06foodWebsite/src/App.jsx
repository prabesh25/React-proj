import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Head from "./assets/components/Head";
// import {BrouserRouter as Router, } from 'react-router-dom';
// import Home from "./assets/components/Home";
import Body from "./assets/components/Body";
import RestaurantMenu from "./assets/components/RestaurantMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Head />} >
      <Route path="/" element={<Body />} />
      <Route path="/restaurantMenu/:id" element={<RestaurantMenu />} />
      </Route>
    </Routes>
  
  );
}

export default App;
