import React from "react";

class ToDoItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.title}{" "}
        <input type="checkbox" checked={this.props.completed} />;
      </li>
    );
  }
}

export default ToDoItem;
