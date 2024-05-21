import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from "./Login";
import Main from "./Main";

function App() {

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-slate-300">
      <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col gap-3">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
