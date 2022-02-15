import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

import { TodoContext } from '../TodoContext'

function Modal () {
  
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const addTodoClick = () => {
    const text = document.getElementById('modalInputText').value
    addTodo(text);
  }

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal-form-container">
        <textarea id="modalInputText" type="text" className="modal-input form-control" placeholder="Escribe lo harás..." rows="6" />
        <button className="btn btn-danger" onClick={() => setOpenModal(false)}>Cancelar</button>
        <button className="btn btn-success" onClick={() => addTodoClick()}>Añadir</button>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }