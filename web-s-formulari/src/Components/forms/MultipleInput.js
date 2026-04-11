import React, { Component } from "react";

class MultipleInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          name="name"
          placeholder="Jméno"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <p>
          {this.state.name} | {this.state.email}
        </p>
      </div>
    );
  }
}

export default MultipleInputs;
