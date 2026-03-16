import React from "react";
import SimpleInput from "./forms/simpleInput.js";
import MultipleInput from "./forms/MultipleInput.js";

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
  };

  render() {
    return (
      <div className="appContainer">
        <h1>Formulari</h1>
        <SimpleInput handleInput={this.handleInput} />{" "}
        <p>Input value: {this.state.text}</p>
        <MultipleInput handleChange={this.handleChange} />
      </div>
    );
  }
}

export default appContainer;
