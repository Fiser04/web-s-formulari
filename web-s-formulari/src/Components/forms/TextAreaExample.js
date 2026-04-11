import React, { Component } from "react";

class TextareaExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="4"
          cols="40"
          placeholder="Zadej zprávu"
          value={this.state.message}
          onChange={this.handleChange}
        />

        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default TextareaExample;
