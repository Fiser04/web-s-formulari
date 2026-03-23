import React, { Component } from "react";

class ToDoAdder extends Component {
  state = {
    title: "",
  };

  handleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItemProps(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Add a new task"
          className="input-text"
        />
        <button type="submit" className="input-submit">
          Add
        </button>
      </form>
    );
  }
}

export default ToDoAdder;
