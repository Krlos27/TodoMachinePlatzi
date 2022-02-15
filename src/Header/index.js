import React from 'react'
import "./Header.css"
import { TodoSearch } from '../TodoSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Header({searchInputValue, searchValue}) {
  return (
    <>
      <header id="myheader">
        <img src="./img/logo.png" alt="Logo" />
        <span className="logo-text">ToDo</span>
        <TodoSearch searchInputValue={searchInputValue} searchValue={searchValue} />
      </header>
    </>
  );
}

export { Header };