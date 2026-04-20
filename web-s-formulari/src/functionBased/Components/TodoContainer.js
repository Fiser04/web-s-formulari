import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import ToDoAdder from "./ToDoAdder";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";

const ToDoContainer = () => {
  const [items, setItems] = useState(getInitialItems());

  function getInitialItems() {
    const temp = localStorage.getItem("items");
    const savedItems = JSON.parse(temp);
    return savedItems || [];
  }

  const handleChange = (id) => {
    console.log("clicked", id);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );
  };

  const setUpdate = (updatedTitle, id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              title: updatedTitle,
            }
          : item,
      ),
    );
  };

  const deleteItem = (id) => {
    console.log("delete", id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = (title) => {
    console.log("add", title);
    const newItem = {
      userId: 1,
      id: uuidv4(),
      title: title,
      completed: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <ToDoAdder addItemProps={addItem} />
        <ToDoList
          items={items}
          handleChangeProps={handleChange}
          deleteItemProps={deleteItem}
          setUpdateProps={setUpdate}
        />
      </div>
    </div>
  );
};

export default ToDoContainer;
