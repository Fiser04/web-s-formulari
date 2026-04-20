import React, { useState } from "react";

function RHInputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Zadej jméno"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Zadané jméno: {name}</p>
    </div>
  );
}

export default RHInputExample;
