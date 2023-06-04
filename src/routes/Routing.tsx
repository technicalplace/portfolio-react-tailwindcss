import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Application } from "../components/Application/Application";
import { Career } from "../components/Career/Career";
import { Sns } from "../components/Sns/Sns";
import { SelfStudy } from "../components/SelfStudy/SelfStudy";
import { Calculator } from "../components/Application/Calculator/Calculator";


export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Application" element={<Application />}></Route>
      <Route path="/Career" element={<Career />}></Route>
      <Route path="/Sns" element={<Sns />}></Route>
      <Route path="/SelfStudy" element={<SelfStudy />}></Route>
      <Route path="/Application/Calculate" element={<Calculator />}></Route>
    </Routes>
  );
};
