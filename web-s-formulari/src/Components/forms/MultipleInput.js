import React from "react";
class multipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }
  render() {
    return (
      <form>
        <label>Name:</label>
        <input type="text" name="name" onChange={this.props.handleChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" onChange={this.props.handleChange} />
      </form>
    );
  }
}

export default multipleInput;
