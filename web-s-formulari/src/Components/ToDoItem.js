import React from "react";
import Style from "./ToDoItem.module.css";
class ToDoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through",
      opacity: 0.4,
    };
    return (
      <div className={Style.item}>
        <li>
          {/* <form onSubmit={this.alertUser}>*/}
          <form>
            <span style={this.props.completed ? completedStyle : null}>
              {this.props.title}{" "}
            </span>

            <input
              type="checkbox"
              className={Style.checkbox}
              checked={this.props.completed}
              onChange={() => this.props.handleChangeProps(this.props.item.id)}
            />
            <button
              type="button"
              onClick={() => this.props.deleteItemProps(this.props.item.id)}
            >
              Delete
            </button>
          </form>
        </li>
      </div>
    );
  }
}

export default ToDoItem;
