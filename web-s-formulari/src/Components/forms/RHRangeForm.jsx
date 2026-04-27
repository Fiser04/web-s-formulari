import React, { useState } from "react";

function RHBasicInputForm() {
  const [price, setPrice] = useState({
    cost: 0,
  });

  const handleChange = (event) => {
    setPrice({
      ...price,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <input
        type="range"
        name="cost"
        value={price.cost}
        onChange={handleChange}
      />
      <p>Current Input: {price.cost}</p>
    </>
  );
}

export default RHBasicInputForm;
