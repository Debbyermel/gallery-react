import React from 'react';
import TodoItem from "./TodoItem";
import todoData from "./todoData";

export default function Todo() {
  const todoComponents = todoData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />)

  return (
    <div className="todo-list">
      {todoComponents}
    </div>
  )
}