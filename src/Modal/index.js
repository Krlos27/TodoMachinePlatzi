import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

function Modal ({ setOpenModal, addTodo }) {

  const addTodoClick = () => {
    const text = document.getElementById('modalInputText').value
    addTodo(text);
  }

  return ReactDOM.createPortal(
    <div className="modal-background">
      <form onSubmit={addTodoClick} className="modal-form-container">
        <textarea id="modalInputText" type="text" className="modal-input form-control" placeholder="Escribe lo harás..." rows="6" />
        <button className="btn btn-danger" onClick={() => setOpenModal(false)}>Cancelar</button>
        <button className="btn btn-success" type="submit">Añadir</button>
      </form>
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }