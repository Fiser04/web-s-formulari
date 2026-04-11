import React, { Component } from "react";

class CompleteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      country: "",
      agree: false,
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" placeholder="Jméno" onChange={this.handleChange} />

        <input name="email" placeholder="Email" onChange={this.handleChange} />

        <select name="country" onChange={this.handleChange}>
          <option value="">Vyber stát</option>
          <option value="cz">ČR</option>
          <option value="sk">SR</option>
        </select>

        <label>
          <input type="checkbox" name="agree" onChange={this.handleChange} />
          Souhlasím s podmínkami
        </label>

        <button type="submit">Odeslat</button>
      </form>
    );
  }
}

export default CompleteForm;
