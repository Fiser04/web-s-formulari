import React, { useState } from "react";

function RHBasicInputForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form>
        <label>
          Input:
          <input
            type="text"
            value={form.firstName}
            onChange={handleChange}
            name="firstName"
          />
          <input
            type="text"
            value={form.lastName}
            onChange={handleChange}
            name="lastName"
          />
        </label>
      </form>
      <p>
        Current Input: {form.firstName} {form.lastName}
      </p>
    </>
  );
}

export default RHBasicInputForm;
