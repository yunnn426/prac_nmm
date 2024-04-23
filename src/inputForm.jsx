import React, { useState } from "react";

const InputForm = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  }
  return (<>
    <input className="text-sm rounded-lg px-2"
      type="text"
      value={input}
      onChange={handleChange}
      placeholder={props.placeholder}
    />
  </>)
}
export default InputForm;