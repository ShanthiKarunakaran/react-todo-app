import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData'
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos: todosData
    }
  }
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem item={item} key={item.id} />)
    return(
      <div class="todo-list">
        {todoItems}
      </div>
    )
  }
}
 
    
  
   
  



export default App;
