import React from "react";

const TodoItem1 = () => {

    let todoName = 'Buy Milk';
    let todoDate = '4/10/23';


  return (
    <div className="row">
      <div className="col-6">{todoName}</div>
      <div className="col-8">{todoDate}</div>
      <div className="col-4">
        <button type="button" className="btn-del">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem1;
