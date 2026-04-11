import React, { Component } from "react";

import SimpleInput from "./forms/SimpleInput";
import MultipleInputs from "./forms/MultipleInputs";
import SelectExample from "./forms/SelectExample";
import CheckboxRadioExample from "./forms/CheckboxRadioExample";
import TextareaExample from "./forms/TextareaExample";
import FormValidation from "./forms/FormValidation";
import CompleteForm from "./forms/CompleteForm";

class AppContainer extends Component {
  render() {
    return (
      <div style={{ padding: "40px" }}>
        <h1>React formuláře</h1>

        <h2>1. Jednoduchý input</h2>
        <SimpleInput />

        <h2>2. Více vstupních polí</h2>
        <MultipleInputs />

        <h2>3. Select</h2>
        <SelectExample />

        <h2>4. Checkbox a Radio</h2>
        <CheckboxRadioExample />

        <h2>5. Textarea</h2>
        <TextareaExample />

        <h2>6. Validace</h2>
        <FormValidation />

        <h2>7. Kompletní formulář</h2>
        <CompleteForm />
      </div>
    );
  }
}

export default AppContainer;
