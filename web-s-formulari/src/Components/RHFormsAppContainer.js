import React from "react";
import RHRangeForm from "./forms/RHRangeForm";
import RHBasicInputForm from "./forms/RHBasicInputForm";
import RHMultipleInputForms from "./forms/RHMultipleInputForms";
import RHTextAreaForm from "./forms/RHTextAreaForm";
import RHSelectForm from "./forms/RHSelectForm";
import RHCheckBoxForm from "./forms/RHCheckBoxForm";
import RHRadiumButton from "./forms/RHRadiumButton";

function RHFormsAppContainer() {
  return (
    <div>
      <h1>RH Forms App Container</h1>

      <h2>Basic Input Form</h2>
      <RHBasicInputForm />

      <h2>Multiple Input Forms</h2>
      <RHMultipleInputForms />

      <h2>Text Area Form</h2>
      <RHTextAreaForm />

      <h2>Select Form</h2>
      <RHSelectForm />

      <h2>Check Box Form</h2>
      <RHCheckBoxForm />

      <h2>Radium Button Form</h2>
      <RHRadiumButton />

      <h2>Range Form</h2>
      <RHRangeForm />
    </div>
  );
}

export default RHFormsAppContainer;
