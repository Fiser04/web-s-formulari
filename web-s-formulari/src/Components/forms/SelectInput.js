import React, { Component } from "react";

class SelectExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      country: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <select value={this.state.country} onChange={this.handleChange}>
          <option value="">Vyber stát</option>
          <option value="cz">Česká republika</option>
          <option value="sk">Slovensko</option>
          <option value="de">Německo</option>
        </select>

        <p>Vybraný stát: {this.state.country}</p>
      </div>
    );
  }
}

export default SelectExample;
