import React from "react";
import ToDoList from "./ToDoList";
import ToDoAdder from "./ToDoAdder";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";

class ToDoContainer extends React.Component {
  state = {
    items: [],
    removedText: "",
    removedVisible: false,
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
  setUpdate = (updatedTitle, id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          item.title = updatedTitle;
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

  componentDidMount() {
    // async call to fetch data from API and update state with the response
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ items: data }));

    const temp = localStorage.getItem("items");
    const loadedItems = JSON.parse(temp);
    if (loadedItems) {
      this.setState({
        items: loadedItems,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    if (prevState.items !== this.state.items) {
      console.log("items updated");
      localStorage.setItem("items", JSON.stringify(this.state.items));
    }
  }

  showRemoved = (title) => {
    this.setState({
      removedText: `Polozka ${title} byla odstranena`,
      removedVisible: true,
    });
  };

  fetchItems = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
          removedText: "",
          removedVisible: false,
        });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <ToDoAdder addItemProps={this.addItem} />
          {this.state.removedVisible ? <p>{this.state.removedText}</p> : null}
          <ToDoList
            items={this.state.items}
            handleChangeProps={this.handleChange}
            deleteItemProps={this.deleteItem}
            setUpdateProps={this.setUpdate}
            onRemoved={this.showRemoved}
          />
          <button className="reset" onClick={this.fetchItems}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoContainer;
