import React from "react";

class ToDoAdder extends React.Component {
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
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ToDoAdder;
