import React from "react";
import { Link } from 'react-router-dom'

export const Home = () => {
  const ITEMS = [
    {
      id: 0,
      href: "/Application",
      children: "Application",
      title: "Application",
      description: "Here is a list of applications I have created so far",
    },
    {
      id: 1,
      href: "/Career",
      children: "Career",
      title: "Career",
      description: "This is my previous career history",
    },
    {
      id: 2,
      href: "/Blog",
      children: "Blog",
      title: "Blog",
      description:
        "If you don't mind, please take a look at the various Blog I have listed",
    },
    {
      id: 3,
      href: "/Contact",
      children: "Contact",
      title: "Contact",
      description:
        "I am writing about the things I consciously focus on when I study",
    },
  ];
  return (
    <div className="max-w-5xl h-screen py-32 mx-auto grid grid-cols-2 grid-rows-2 gap-7 justify-around">
      {ITEMS.map(({ id, title, href, children, description }) => {
        return (
          <Link
            key={id}
            to={href}
            className="px-4 pt-10 pb-4 mx-3 box-border h-full text-emerald-500 text-center border-8 border-double border-cyan-600 rounded-xl hover:scale-110 duration-1000"
          >
            <h1 className="text-3xl font-bold text-slate-200 h-1/3">
              {title}&nbsp;→
            </h1>
            <p className="w-full h-2/3 box-border mt-3 text-slate-300">{description}</p>
          </Link>
        );
      })}
    </div>
  );
};
