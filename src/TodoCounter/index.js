import React from 'react'
import './TodoCounter.css'

function TodoCounter({ completedTodos, totalTodoCount, loading }) {

  return (
    <>
    <div className="todo-counter-container">
      {loading?<h2>Cargando</h2>:<h2>Tienes {completedTodos} completados de {totalTodoCount} ToDo's</h2>}
    </div>
    </>
  );
}

export { TodoCounter };