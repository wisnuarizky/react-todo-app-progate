/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

function Todos({ todos }) {
  return (
    <div>
      <h1>my todos list</h1>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default Todos;
