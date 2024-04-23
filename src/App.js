import React from "react";
import Game from "../src/components/game"
import Login from "../src/components/login"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-slate-300">
      <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col gap-3">
      <Routes>
      <Route path = "/game" element = {<Game />}></Route>
      <Route path = "/" element = {<Login />}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
