import React, { useState } from "react";

function RHBasicInputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form>
        <label>
          Input:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <p>Current Input: {inputValue}</p>
    </>
  );
}

export default RHBasicInputForm;
