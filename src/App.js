import React from "react";
import InputForm from "./inputForm";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-slate-300">
      로그인
      <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col gap-3">

      <InputForm placeholder="password"/>
      </div>
    </div>
  );
}

export default App;
