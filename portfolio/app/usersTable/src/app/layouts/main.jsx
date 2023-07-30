import React from 'react'
import useMockData from '../utils/mockData'

const Main = () => {
  const {error, initialize, progress, status} = useMockData()

  const handleClick = () => {
    console.log('handleClick')  
    initialize()
  }

  return (
    <div className="container mt-3">
      <h2>Main page</h2>
      <h6>Инициализация данных в FireBase</h6>
      <ul>
        <li>Status: {status}</li>
        <li>Progress: {progress}%</li>
        {error && <li>error: </li>}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>Инициализировать</button>
    </div>
  )
}

export default Main
