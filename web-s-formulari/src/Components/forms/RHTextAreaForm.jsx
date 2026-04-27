import React, { useState } from "react";

function RHTextAreaForm() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <form>
        <label>
          Input:
          <textarea type="text" value={message} onChange={handleChange} />
        </label>
      </form>
      <p>Current Input: {message}</p>
    </>
  );
}

export default RHTextAreaForm;
