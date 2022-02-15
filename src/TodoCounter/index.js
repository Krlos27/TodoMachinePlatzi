import React from 'react'
import './TodoCounter.css'
import { TodoContext } from './../TodoContext'

function TodoCounter() {

  const { completedTodos, totalTodoCount, loading } = React.useContext(TodoContext);

  return (
    <>
    <div className="todo-counter-container">
      {loading?<h2>Cargando</h2>:<h2>Tienes {completedTodos} completados de {totalTodoCount} ToDo's</h2>}
    </div>
    </>
  );
}

export { TodoCounter };