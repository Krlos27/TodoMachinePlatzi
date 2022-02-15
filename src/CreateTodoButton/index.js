import React from 'react'
import "./CreateTodoButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { TodoContext } from '../TodoContext'

function CreateTodoButton() {

  const { setOpenModal, openModal } = React.useContext(TodoContext);

  const newTodoClick = () => {
    if (!openModal) {
      setOpenModal(true)
    }else{
      setOpenModal(false)
    }
  }


  return (
    <>
      <button className="add-button btn btn-success" onClick={newTodoClick}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  );
}

export { CreateTodoButton };