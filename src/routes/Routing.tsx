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
import { Modal } from "../components/Application/Modal/Modal";
import { PhotoSearch } from "../components/Application/PhotoSearch/PhotoSearch";
import { Pokemon } from "../components/Application/Pokemon/Pokemon";
import { BookSearch } from "../components/Application/BookSearch/BookSearch";


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
      <Route path="/Application/Modal" element={<Modal />}></Route>
      <Route path="/Application/PhotoSearch" element={<PhotoSearch />}></Route>
      <Route path="/Application/PokemonPictorialBook" element={<Pokemon />}></Route>
      <Route path="/Application/BookSearch" element={<BookSearch />}></Route>
    </Routes>
  );
};
