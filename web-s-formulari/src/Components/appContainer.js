import React from "react";
import SimpleInput from "./forms/simpleInput.js";
import MultipleInput from "./forms/MultipleInput.js";
import SelectInput from "./forms/SelectInput.js";
import CheckBoxRadio from "./forms/CheckBoxRadio.js";
import FormValidation from "./forms/FormValidation.js";
class appContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  handleInput = (event) => {
    event.preventDefault();
    console.log("Input received:", event.target.value);
    this.setState({ text: event.target.value });
  };

  handleChange = (event) => {
    [event.target.name] = event.target.value;
    console.log("Input received:", event.target.value);
  };

  handlecheckbox = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [name]: value,
    }));
    console.log("Checkbox input received:", name, value);
  };

  handleCheckEmail = (event) => {
    const email = event.target.value;
    if (!email.includes("@")) {
      this.setState({ error: "Invalid email address" });
    } else {
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <div className="appContainer">
        <h1>Formulari</h1>
        <SimpleInput handleInput={this.handleInput} />{" "}
        <MultipleInput handleChange={this.handleChange} />
        <SelectInput handleInput={this.handleChange} />
        <CheckBoxRadio handleInput={this.handlecheckbox} />
        <FormValidation handleCheckEmail={this.handleCheckEmail} />
      </div>
    );
  }
}

export default appContainer;
