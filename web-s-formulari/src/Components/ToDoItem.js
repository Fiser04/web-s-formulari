import React from "react";
import Style from "./ToDoItem.module.css";
class ToDoItem extends React.Component {
  state = {
    editing: false,
  };
  onEditing = () => {
    this.setState({
      editing: true,
    });
  };
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through",
      opacity: 0.4,
    };

    return (
      <div OnDoubleClick="">
        <li className={Style.list}>
          <input
            type="checkbox"
            className={Style.checkbox}
            checked={this.props.item.completed}
            onChange={() => this.props.handleChangeProps(this.props.item.id)}
          />
          <button
            onClick={() => this.props.deleteItemProps(this.props.item.id)}
          >
            Delete
          </button>
          <span style={this.props.item.completed ? completedStyle : null}>
            {this.props.item.title}{" "}
          </span>
        </li>
      </div>
    );
  }
}

export default ToDoItem;
