import React, { Component } from "react";

class AppContainerStorageSimple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    const savedName = localStorage.getItem("username");

    if (savedName) {
      this.setState({
        username: savedName,
      });
    }
  }

  handleChange = (e) => {
    const value = e.target.value;

    this.setState({
      username: value,
    });

    localStorage.setItem("username", value);
  };

  handleClear = () => {
    localStorage.removeItem("username");

    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <div style={{ marginBottom: "40px" }}>
        <h3>1. Uložení jednoho inputu do localStorage</h3>

        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Zadej jméno"
        />

        <button onClick={this.handleClear} style={{ marginLeft: "10px" }}>
          Vymazat
        </button>

        <p>Uložené jméno: {this.state.username}</p>
      </div>
    );
  }
}

export default AppContainerStorageSimple;
