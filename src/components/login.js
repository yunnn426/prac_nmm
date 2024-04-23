import React from 'react';
import InputForm from "../inputForm";


function login() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-slate-300">
        <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col gap-3">
        <InputForm placeholder="id"/>
        <InputForm placeholder="password"/>
        </div>
    </div>
  );
}

export default login;
