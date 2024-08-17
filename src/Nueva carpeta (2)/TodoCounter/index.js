import React from 'react';
import './TodoCounter.css';
import react from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
 const{
  completedTodos,
  totalTodos,
 } = react.useContext(TodoContext)
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
