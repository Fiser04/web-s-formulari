import React, { Component } from "react";

class CheckBoxRadio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsletter: false,
      gender: "",
    };
  }

  handleCheckbox = (e) => {
    this.setState({
      newsletter: e.target.checked,
    });
  };

  handleRadio = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.newsletter}
            onChange={this.handleCheckbox}
          />
          Odebírat newsletter
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleRadio}
          />
          Muž
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleRadio}
          />
          Žena
        </label>

        <p>Newsletter: {this.state.newsletter ? "Ano" : "Ne"}</p>
        <p>Pohlaví: {this.state.gender}</p>
      </div>
    );
  }
}

export default CheckBoxRadio;
