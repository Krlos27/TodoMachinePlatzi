import React from 'react'
import "./Main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Main(props) {
  return (
    <>
      <main id="mymain">
        {props.children}
      </main>
    </>
  );
}

export { Main };