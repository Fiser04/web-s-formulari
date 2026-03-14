import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <ToDoItem title={item.title} completed={item.completed} />
        ))}
      </ul>
    );
  }
}

export default ToDoList;
