import React from 'react';
import TodoItem from "./TodoItem";

export default function Todo() {

  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}