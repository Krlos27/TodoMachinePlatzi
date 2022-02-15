import React from 'react'
import './EmptyScreen.css'

function EmptyScreen() {
  return (
    <div className="empty-screen-container">
      <img src="./img/not-found.png" alt="Empty" />
      <h2>No tienes ToDo's, empieza a crear uno!</h2>
    </div>
  )
}

export { EmptyScreen }