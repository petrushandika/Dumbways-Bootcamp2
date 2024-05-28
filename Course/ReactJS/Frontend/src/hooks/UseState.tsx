import { useState } from "react";

export default function UseState() {
  const [inputValue, setInputValue] = useState("Petrus");

  let changeInput = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Please enter something"
        onChange={changeInput}
      />
      {inputValue}
    </div>
  );
}
