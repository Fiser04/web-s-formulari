import React, { useState } from "react";

function RHCounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Počet: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Přičíst</button>
      <button onClick={() => setCount(count - 1)}>Odečíst</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default RHCounterExample;
