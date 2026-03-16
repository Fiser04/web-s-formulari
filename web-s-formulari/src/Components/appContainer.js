import React from "react";
import simpleInput from "./forms/simpleInput";
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

  render() {
    return (
      <div className="appContainer">
        <h1>Formulari</h1>
        <simpleInput handleInput={this.handleInput} />{" "}
        <p>Input value: {this.state.text}</p>
      </div>
    );
  }
}

export default appContainer;
