import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="form-container">
        <ul>
          {this.props.items.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              title={item.title}
              completed={item.completed}
              handleChangeProps={this.props.handleChangeProps}
              deleteItemProps={this.props.deleteItemProps}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
