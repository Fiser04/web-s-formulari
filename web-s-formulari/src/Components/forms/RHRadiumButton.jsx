import React, { useState } from "react";

function RHBasicInputForm() {
  const [form, setForm] = useState({
    gender: "male",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={form.gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={form.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>
      <p>Current Input: {form.gender}</p>
    </div>
  );
}

export default RHBasicInputForm;
