import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import todoData from "./todoData";
import todosData from './todoData';

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {

  }

  render() {
    const todoComponents = todoData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />)
    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    )
  }
}

export default Todo;