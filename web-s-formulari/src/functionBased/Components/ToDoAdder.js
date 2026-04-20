import React, { useState } from "react";

// class ToDoAdder extends Component {
//   state = {
//     title: "",
//   };

//   handleChange = (event) => {
//     this.setState({
//       title: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.addItemProps(this.state.title);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.title}
//           onChange={this.handleChange}
//           placeholder="Add a new task"
//           className="input-text"
//         />
//         <button className="input-submit">Add</button>
//       </form>
//     );
//   }
// }

// export default ToDoAdder;

const ToDoAdder = (props) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      alert("Title cannot be empty");
      return;
    }
    props.addItemProps(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Add a new task"
        className="input-text"
      />
      <button className="input-submit">Add</button>
    </form>
  );
};

export default ToDoAdder;
