import React from 'react'
import './TodoSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { TodoContext } from '../TodoContext'

function TodoSearch() {

  const { searchValue, searchInputValue } = React.useContext(TodoContext)

  const searchInput = (event) => {
    searchValue(event.target.value)
  }

  return (
    <>
      <div className="todo-search-container">
        <input type="text" placeholder="Buscar..." name="search" className="todo-search-input form-control" onChange={searchInput} value={searchInputValue}/>
        <button type="button" className="btn btn-search"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
    </>
  );
}

export { TodoSearch };