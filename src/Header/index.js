import React from 'react'
import "./Header.css"

function Header({children}) {
  return (
    <>
      <header id="myheader">
        <img src="./img/logo.png" alt="Logo" />
        <span className="logo-text">ToDo</span>
        {children}
      </header>
    </>
  );
}

export { Header };