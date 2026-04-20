import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p>Čas: {seconds} s</p>;
}

function RHUnmountEffectExample() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Skrýt timer" : "Zobrazit timer"}
      </button>
      {show && <Timer />}
    </div>
  );
}

export default RHUnmountEffectExample;
