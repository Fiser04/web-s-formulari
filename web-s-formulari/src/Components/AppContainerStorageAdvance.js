import React, { Component } from "react";

class AppContainerStorageAdvance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      city: "",
    };
  }

  componentDidMount() {
    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);

      this.setState({
        name: parsedProfile.name || "",
        email: parsedProfile.email || "",
        city: parsedProfile.city || "",
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSave = () => {
    const profileData = {
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
    };

    localStorage.setItem("profile", JSON.stringify(profileData));
    alert("Data byla uložena do localStorage");
  };

  handleLoad = () => {
    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);

      this.setState({
        name: parsedProfile.name || "",
        email: parsedProfile.email || "",
        city: parsedProfile.city || "",
      });
    }
  };

  handleDelete = () => {
    localStorage.removeItem("profile");

    this.setState({
      name: "",
      email: "",
      city: "",
    });
  };

  render() {
    return (
      <div style={{ marginBottom: "40px" }}>
        <h3>2. Formulář s více poli a localStorage</h3>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Jméno"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            name="city"
            placeholder="Město"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </div>

        <div style={{ marginTop: "15px" }}>
          <button onClick={this.handleSave}>Uložit</button>
          <button onClick={this.handleLoad} style={{ marginLeft: "10px" }}>
            Načíst
          </button>
          <button onClick={this.handleDelete} style={{ marginLeft: "10px" }}>
            Smazat
          </button>
        </div>

        <div style={{ marginTop: "15px" }}>
          <p>
            <strong>Jméno:</strong> {this.state.name}
          </p>
          <p>
            <strong>Email:</strong> {this.state.email}
          </p>
          <p>
            <strong>Město:</strong> {this.state.city}
          </p>
        </div>
      </div>
    );
  }
}

export default AppContainerStorageAdvance;
