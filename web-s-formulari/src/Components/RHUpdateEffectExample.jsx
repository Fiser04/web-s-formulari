import React, { useEffect, useState } from "react";

function RHUpdateEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Počet: ${count}`;
  }, [count]);

  return (
    <div>
      <h3>Počet: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Přičíst</button>
    </div>
  );
}

export default RHUpdateEffectExample;
