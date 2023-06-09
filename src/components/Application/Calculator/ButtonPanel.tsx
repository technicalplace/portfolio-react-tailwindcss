import React from "react";
import { Link } from "react-router-dom";

export const ButtonPanel = (props: {
  buttonHandler: (code: string) => void;
}) => {
  return (
    <div className="h-screen">
      <div className="w-48 mx-auto mt-6 pb-6">
        <div className="bg-red-300">
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("7")}
          >
            7
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("8")}
          >
            8
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("9")}
          >
            9
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("AC")}
          >
            AC
          </button>
        </div>
        <div className="bg-red-300">
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("4")}
          >
            4
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("5")}
          >
            5
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("6")}
          >
            6
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("-")}
          >
            -
          </button>
        </div>
        <div className="bg-red-300">
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("1")}
          >
            1
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("2")}
          >
            2
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("3")}
          >
            3
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("+")}
          >
            +
          </button>
        </div>
        <div className="bg-red-300">
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("0")}
          >
            0
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler(".")}
          >
            .
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("D")}
          >
            D
          </button>
          <button
            className="w-10 h-10 m-1 border-2 border-solid border-slate-900 bg-emerald-500"
            onClick={() => props.buttonHandler("=")}
          >
            =
          </button>
        </div>
      </div>
      <button className="flex mx-auto mt-14 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <Link to="/Application">Application Page&nbsp;→</Link>
      </button>
    </div>
  );
};
