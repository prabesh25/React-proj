import React from "react";

const AddTodo = () => {
  return (
    <div className="row">
      <div className="col-6">
        <input type="text" placeholder="Enter Todo Here" />
      </div>
      <div className="col-8">
        <input type="date" />
      </div>
      <div className="col-4">
        <button type="button" className="btn-add">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
