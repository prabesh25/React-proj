import { useState } from "react";
import "./App.css";
import { TodoItemsContext } from "./store/todoItemsSotre";
import Input from "./components/Input";
import ContainerTop from "./components/ContainerTop";
import Complement from "./components/Complement";
import MainContainer from "./components/MainContainer";

function App() {

  const todoItems = [
    {
      name: "buy milk",
      dueDate: "4/10/2025",
    },
    {
      name: "go to collage",
      dueDate: "3/22/2025",
    },
    {
      name: "go for morning walk",
      dueDate: "3/11/2025",
    },
    {
      name: "go for a walk",
      dueDate: "3/11/2025",
    },
  ];

  let [TodoItems, setTodoItems] = useState(todoItems);
  let [inputValue, setInputValue] = useState("");
  let [inputDate, setInputDate] = useState("");


  let inputListener = (e) => {
    setInputValue(e.target.value);
  }

  const dateListener = (e) => {
    console.log(e.target.value);
    setInputDate(e.target.value);
  }

  let addTodoItem = () => {
    const newtodoitems = [...TodoItems, {name: inputValue, dueDate: inputDate}]
    setTodoItems(newtodoitems);    
  }



  const addButton = () => {
    // console.log(inputValue);
    setInputDate("");
    addTodoItem();
    // console.log(Todoitems)
    setInputValue('');
    // console.log(inputDate);
  }

  let deleteTodoItem = (itemName) => {
    let newarr = TodoItems.filter(item => item.name !== itemName);
      setTodoItems(newarr);
    console.log(`${itemName} is deleted.`);
  }

  return (
    <div>
    <TodoItemsContext.Provider value={{
      inputValue:inputValue,
      inputListener:inputListener,
      inputDate: inputDate,
      dateListener: dateListener,
      addButton: addButton,
      deleteTodoItem: deleteTodoItem,
      TodoItems: TodoItems,
    }}>
      <center>
        <div id="container">
         <Input/>
         <ContainerTop/>
         <Complement/>
         <MainContainer/> 
        </div>
      </center>
      </TodoItemsContext.Provider>
    </div>
  );
}

export default App;
