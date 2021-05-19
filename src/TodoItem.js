import React from "react"

function TodoItem(props) {
  return(
    <div class="todo-item">
      <input 
        type="checkbox" 
        checked={props.item.completed} 
        onChange={() => console.log("something")}
      />
      <p>{props.item.text}</p>
    </div>
    
  )
}
export default TodoItem