import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <ToDoItem
            title={item.title}
            completed={item.completed}
            handleChangeProps={this.props.handleChangeProps}
          />
        ))}
      </ul>
    );
  }
}

export default ToDoList;
