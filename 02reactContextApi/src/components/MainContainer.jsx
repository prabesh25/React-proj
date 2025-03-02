import React from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsSotre";

const MainContainer = () => {
  const { TodoItems, deleteTodoItem } = useContext(TodoItemsContext);
  return (
    <div id="main-container">
      {TodoItems.map((item, index) => {
        return (
          <div key={index} className="each-item">
            <div>{item.name}</div>
            <div>{item.dueDate}</div>
            <button
              onClick={() => deleteTodoItem(item.name)}
              className="del-btn"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MainContainer;
