import React from "react";
import { Link } from "react-router-dom";
import { CareerLeftIcon } from "./CareerLeftIcon";
import { CareerRightIcon } from "./CareerRightIcon";
import careerImg from "../../img/career-g4243e77c6_640.jpg";


export const Career = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="rounded-lg h-64 overflow-hidden lg:w-4/6 mx-auto">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={careerImg}
        ></img>
      </div>
      <CareerLeftIcon />
      <CareerRightIcon />
      <CareerLeftIcon />
      <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};
