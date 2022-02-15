import React from 'react'
import './LoadingScreen.css'

function LoadingScreen() {
  return (
    <div className="loading-screen-container">
      <img src="./img/loading.gif" alt="Loading" />
    </div>
  )
}

export { LoadingScreen }