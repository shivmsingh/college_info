import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CollegePage from "./components/CollegePage";
import "@picocss/pico";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="college/:id" element={<CollegePage />} />
    </Routes>
  );
};

export default App;