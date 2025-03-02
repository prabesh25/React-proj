import React from 'react'
import { TodoItemsContext } from '../store/todoItemsSotre'
import { useContext } from 'react'


const Input = () => {
    const {inputValue, addButton, inputListener, inputDate, dateListener} = useContext(TodoItemsContext);
  return (
    <div>
         <div className="add-input">
            <input value={inputValue} onChange={inputListener} type="text" placeholder="add items..."/>
            <input value={inputDate} onChange={dateListener} type="date" />
            <button onClick={addButton} className="add-btn">Add</button>
          </div>
    </div>
  )
}

export default Input