import React from "react";
import { Routes, Route } from "react-router";
import Login from "./Login";
import About from "./user/About";
import Register from "./user/Register";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Routing;
