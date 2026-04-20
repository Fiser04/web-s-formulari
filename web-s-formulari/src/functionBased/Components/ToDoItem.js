import React, { useState } from "react";
import Style from "./ToDoItem.module.css";
// class ToDoItem extends React.Component {
//   state = {
//     editing: false,
//   };
//   handleEditing = () => {
//     this.setState({
//       editing: true,
//     });
//   };
//   handleEditingDone = (event) => {
//     if (event.key === "Enter") {
//       this.setState({
//         editing: false,
//       });
//     }
//   };
//   render() {
//     const completedStyle = {
//       fontStyle: "italic",
//       color: "#cdcdcd",
//       textDecoration: "line-through",
//       opacity: 0.4,
//     };
//     let viewMode = {};
//     let editMode = {};
//     if (this.state.editing) {
//       viewMode.display = "none";
//     } else {
//       editMode.display = "none";
//     }
//     return (
//       <li className={Style.item}>
//         <div onDoubleClick={this.handleEditing} style={viewMode}>
//           <input
//             type="checkbox"
//             className={Style.checkbox}
//             checked={this.props.item.completed}
//             onChange={() => this.props.handleChangeProps(this.props.item.id)}
//           />
//           <button
//             onClick={() => this.props.deleteItemProps(this.props.item.id)}
//           >
//             Delete
//           </button>
//           <span style={this.props.item.completed ? completedStyle : null}>
//             {this.props.item.title}{" "}
//           </span>
//         </div>
//         <input
//           type="text"
//           className={Style.textInput}
//           style={editMode}
//           value={this.props.item.title}
//           onChange={(e) => {
//             this.props.setUpdateProps(e.target.value, this.props.item.id);
//           }}
//           onKeyDown={this.handleEditingDone}
//         />
//       </li>
//     );
//   }
// }

// export default ToDoItem;

const ToDoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleEditingDone = (event) => {
    if (event.key === "Enter") {
      if (event.target.value.trim() === "") {
        alert("Please enter a value");
        return;
      } else {
        setEditing(false);
      }
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
    opacity: 0.4,
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={Style.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={Style.checkbox}
          checked={props.item.completed}
          onChange={() => props.handleChangeProps(props.item.id)}
        />
        <button onClick={() => props.deleteItemProps(props.item.id)}>
          Delete
        </button>
        <span style={props.item.completed ? completedStyle : null}>
          {props.item.title}{" "}
        </span>
      </div>
      <input
        type="text"
        className={Style.textInput}
        style={editMode}
        value={props.item.title}
        onChange={(e) => {
          props.setUpdateProps(e.target.value, props.item.id);
        }}
        onKeyDown={handleEditingDone}
      />
    </li>
  );
};

export default ToDoItem;
