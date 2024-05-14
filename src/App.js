import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import InputForm from "./components/inputForm";
import Home from './Home';
import Login from "./Login";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-slate-300">
      <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col gap-3">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
