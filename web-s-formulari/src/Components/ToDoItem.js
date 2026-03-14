import React from "react";

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.completed,
    };
  }
  changeCompleted = (event) => {
    this.setState({ completed: event.target.checked });
  };
  // alertUser = (event) => {
  //   alert("You clicked on " + this.props.title);
  // };
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
            // onChange={this.changeCompleted}
            onChange={() => this.props.handleChangeProps(this.props.item.id)}
          />
          {changed}
        </form>
      </li>
    );
  }
}

export default ToDoItem;
