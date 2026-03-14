import React from "react";

class ToDoItem extends React.Component {
  changeCompleted = (event) => {
    this.setState({ completed: event.target.checked });
  };

  render() {
    let changed = "";
    if (this.state.completed !== this.props.completed) {
      changed = " (changed)";
    }
    return (
      <li>
        {/* <form onSubmit={this.alertUser}>*/}
        <form>
          {this.props.title}{" "}
          <input
            type="checkbox"
            checked={this.props.completed}
            onChange={() => this.props.handleChangeProps(this.props.item.id)}
          />
          {changed}
        </form>
      </li>
    );
  }
}

export default ToDoItem;
