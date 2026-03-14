import React from "react";
import ToDoList from "./ToDoList";

class ToDoContainer extends React.Component {
  state = {
    items: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
      {
        userId: 1,
        id: 5,
        title:
          "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
      },
      {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false,
      },
    ],
  };
  //HANDLE CHANGE STATE UPDATE
  // handleChange = (id) => {
  //   console.log("clicked", id);
  //   this.setState({
  //     items: this.state.items.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       }
  //       return item;
  //     }),
  //   });
  // };

  //HANDLE CHANGE STATE UPDATE WITH PREVIOUS STATE
  handleChange = (id) => {
    console.log("clicked", id);
    this.setState((prevState) => {
      return {
        items: prevState.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    });
  };

  deleteItem = (id) => {
    console.log("delete", id);
  };

  render() {
    return (
      <div>
        <ToDoList
          items={this.state.items}
          handleChangeProps={this.handleChange}
        />
      </div>
    );
  }
}

export default ToDoContainer;
