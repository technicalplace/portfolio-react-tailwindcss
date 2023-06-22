import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CountUpDown = () => {
  const [count, setCount] = useState(0);
  const handleClickUp = () => {
    setCount((count) => count + 1);
  }
  const handleClickDown = () => {
    setCount((count) => count - 1);
  }
  return (
    <div className="h-screen">
      <div className="text-center">
        <h1 className="text-5xl pt-10">Count: {count}</h1>
        <button onClick={handleClickUp} className="m-10 p-5 border-4 border-black rounded-xl bg-rose-500 text-gray-200 text-2xl">
          カウントアップ
        </button>
        <button onClick={handleClickDown} className="m-10 p-5 border-4 border-black rounded-xl bg-blue-500 text-gray-200 text-2xl">
          カウントダウン
        </button>
      </div>
      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <Link to="/Application">Application Page&nbsp;→</Link>
      </button>
    </div>
  );
};
