import React from "react";
import ToDoItem from "./ToDoItem";
class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            handleChangeProps={this.props.handleChangeProps}
            deleteItemProps={this.props.deleteItemProps}
          />
        ))}
      </ul>
    );
  }
}

export default ToDoList;
