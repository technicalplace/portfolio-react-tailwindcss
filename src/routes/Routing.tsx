import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Application } from "../components/Application/Application";
import { Career } from "../components/Career/Career";
import { Sns } from "../components/Sns/Sns";
import { Contact } from "../components/Contact/Contact";
import { Calculator } from "../components/Application/Calculator/Calculator";
import { CountUpDown } from "../components/Application/CountUpDown/CountUpDown";
import { Recipe } from "../components/Application/RecipeSearch/Recipe";


export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Application" element={<Application />}></Route>
      <Route path="/Career" element={<Career />}></Route>
      <Route path="/Sns" element={<Sns />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Application/Calculate" element={<Calculator />}></Route>
      <Route path="/Application/CountUpDown" element={<CountUpDown />}></Route>
      <Route path="/Application/RecipeSearch" element={<Recipe />}></Route>
    </Routes>
  );
};
