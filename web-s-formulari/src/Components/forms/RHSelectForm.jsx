import React, { useState } from "react";

function RHSelectForm() {
  const [car, setCar] = useState("");

  const handleChange = (event) => {
    setCar(event.target.value);
  };

  return (
    <>
      <select value={car} onChange={handleChange}>
        <option value="">Select a car</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <p>Current Input: {car}</p>
    </>
  );
}

export default RHSelectForm;
