import React from 'react'
import "./TodoItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {

  return (
    <>
      <div className={`todo-item ${props.todo.completed ? 'todo-checked' : ''}`}>
        <span className="btn-checktodo btn" title={props.todo.completed?"Ya está completada":"Marcar como completada"} onClick={() => props.checkTodo(props.todo.id)}><FontAwesomeIcon icon={faCheck} /></span>
        <p className="todo-text">{props.todo.text}</p>
        <span className="btn-delete btn" title="Eliminar" onClick={() => props.deleteTodo(props.todo.id)}><FontAwesomeIcon icon={faTimes} /></span>
      </div>
    </>
  );
}

export { TodoItem };