import { useState } from "react";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="container text-center">
          <AddTodo />

          <TodoItem1 />
          
          <br />

          <div className="row">
            <div className="col-6">
              Go to collage
            </div>
            <div className="col-8">
              4/10/23
            </div>
            <div className="col-4">
              <button type="button" className="btn-del">
                Delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
