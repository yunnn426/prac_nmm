import React, { useState, useEffect } from "react";

const InputForm = ({ label, type, value, onChange }) => {

  return (<>
    <label>{label}</label>
    <input className="text-sm rounded-lg px-2"
      type={type}
      value={value}
      onChange={onChange}
      placeholder="hello"
    />
  </>)
}
export default InputForm;