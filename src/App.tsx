import React from "react";
import "./App.css";
import { Routing } from "./routes/Routing";

function App() {
  return (
    <div className="bg-gradient-to-r from-sky-700 from-30% via-sky-800 via-40% to-sky-950 to-70% w-full h-full">
      <Routing />
    </div>
  );
}

export default App;
