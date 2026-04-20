import React from "react";
import ToDoItem from "./ToDoItem";
const ToDoList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          handleChangeProps={props.handleChangeProps}
          deleteItemProps={props.deleteItemProps}
          setUpdateProps={props.setUpdateProps}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
