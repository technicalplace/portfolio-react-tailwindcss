import React, { useState } from "react";

export const CountUpDown = () => {
  const [count, setCount] = useState(0);
  const handleClickUp = () => {
    setCount((count) => count + 1);
  }
  const handleClickDown = () => {
    setCount((count) => count - 1);
  }
  return (
    <div className="text-center">
      <h1 className="text-5xl pt-10">Count: {count}</h1>
      <button onClick={handleClickUp} className="m-10 p-5 border-4 border-black rounded-xl bg-rose-500 text-gray-200 text-2xl">
        カウントアップ
      </button>
      <button onClick={handleClickDown} className="m-10 p-5 border-4 border-black rounded-xl bg-blue-500 text-gray-200 text-2xl">
        カウントダウン
      </button>
    </div>
  );
};
