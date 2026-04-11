import React, { Component } from "react";

class FormValidation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.email.includes("@")) {
      this.setState({
        error: "Neplatný email",
      });
    } else {
      this.setState({
        error: "",
      });

      alert("Formulář odeslán s emailem: " + this.state.email);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}

        <button type="submit">Odeslat</button>
      </form>
    );
  }
}

export default FormValidation;
