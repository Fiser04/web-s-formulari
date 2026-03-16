import React from "react";
class appContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      email: "",
    };
  }
  render() {
    return (
      <form>
        <input
          type="text"
          name="username"
          onChange={this.props.handleCheckEmail}
        />
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default appContainer;
