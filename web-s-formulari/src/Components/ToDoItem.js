import React from "react";

class ToDoItem extends React.Component {
  render() {
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
          <button>Delete</button>
        </form>
      </li>
    );
  }
}

export default ToDoItem;
