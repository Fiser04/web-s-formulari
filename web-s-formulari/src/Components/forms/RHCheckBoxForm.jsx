import React, { useState } from "react";

function RHCheckBoxForm() {
  const [isChecked, setIsChecked] = useState({
    option1: true,
  });

  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setIsChecked({
      ...isChecked,
      [event.target.name]: value,
    });
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          name="option1"
          checked={isChecked.option1}
          onChange={handleChange}
        />
        Option 1
      </label>
      <p>Current Input: {isChecked.option1 ? "ano" : "ne"}</p>
    </>
  );
}

export default RHCheckBoxForm;
