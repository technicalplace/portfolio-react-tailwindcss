import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Career } from "./components/Career/Career";
import { Sns } from "./components/Sns/Sns";
import { SelfStudy } from "./components/SelfStudy/SelfStudy";
import { Application } from "./components/Application/Application";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="bg-gradient-to-r from-sky-700 from-30% via-sky-800 via-40% to-sky-950 to-70% w-full h-full">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Application" element={<Application />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/Sns" element={<Sns />}></Route>
        <Route path="/SelfStudy" element={<SelfStudy />}></Route>
      </Routes>
    </div>
  );
}

export default App;
