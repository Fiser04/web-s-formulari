import React, { useEffect, useRef } from "react";

function RHFocusInputExample() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Automatický focus" />
    </div>
  );
}

export default RHFocusInputExample;
