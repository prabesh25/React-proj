import React from "react";
import { TodoItemsContext } from "../store/todoItemsSotre";
import { useContext } from "react";

const Complement = () => {
    const{TodoItems} = useContext(TodoItemsContext);
  return (
    <div>{TodoItems.length === 0 && <div>All Tasks Finished. Yaay</div>}</div>
  );
};

export default Complement;
