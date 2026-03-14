import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoItem extends React.Component {
  render() {
    <ul>
      {this.props.items.map((item) => (
        <ToDoItem title={item.title} completed={item.completed} />
      ))}
    </ul>;
  }
}

export default ToDoItem;
