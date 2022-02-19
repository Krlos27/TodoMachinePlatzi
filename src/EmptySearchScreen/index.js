import React from 'react'
import './EmptySearchScreen.css'

function EmptySearchScreen() {
  return (
    <div className="empty-search-screen-container">
      <img src="./img/not-found.png" alt="Empty" />
      <h2>No hay todos relacionados con tu búsqueda</h2>
    </div>
  )
}

export { EmptySearchScreen }