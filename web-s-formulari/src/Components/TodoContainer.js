import React from "react";
import ToDoList from "./ToDoList";
import ToDoAdder from "./ToDoAdder";
import { v4 as uuidv4 } from "uuid";

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
  handleChange2 = (id) => {
    console.log("clicked", id);
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

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
    this.setState((prevState) => {
      return {
        // items: prevState.items.filter((item) => item.id !== id),
        items: [
          ...this.state.items.filter((item) => {
            return item.id !== id;
          }),
        ],
      };
    });
  };

  addItem = (title) => {
    console.log("add", title);
    const newItem = {
      userId: 1,
      // id: this.state.items.length + 1,
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState((prevState) => {
      return {
        items: [...prevState.items, newItem], // spread operator to add new item to the end of the array
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <ToDoAdder addItemProps={this.addItem} />
          <ToDoList
            items={this.state.items}
            handleChangeProps={this.handleChange}
            deleteItemProps={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default ToDoContainer;
