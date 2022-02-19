import React from 'react'
import "./Main.css"

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