import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./component";
import { Blogs, HomePage, Projects } from "./pages";
import './index.css'

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </>
  );
};
