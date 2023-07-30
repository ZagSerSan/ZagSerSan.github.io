import React, { useEffect, useState } from 'react'
import './playground.css'
import {winCombination} from '../utils/winCombination'

const Playground = () => {
  const [gameOver, setGameOver] = useState(false)
  const [state, setState] = useState('X')
  const [count, setCount] = useState(0)
  const allButtons = document.querySelectorAll('.playground-space__btn')

  useEffect(() => {
    if (count === 9) {
      setGameOver(true)
      console.log('ничья')
      allButtons.forEach(btn => {
        btn.disabled = true
        btn.classList.add('disabled')
        btn.classList.add('game-over')
      })
    }
  }, [count])

  const restartGame = () => {
    setGameOver(false)
    setCount(0)
    allButtons.forEach(btn => {
      btn.textContent = ''
      btn.disabled = false
      btn.classList.remove('disabled')
      btn.classList.remove('game-over')
    })
  }

  const handleClick = ({target}) => {
    if (count !== 9 && target.textContent !== 'X' && target.textContent !== 'O') {
      target.textContent = state
      target.classList.add('disabled')
      setState(prev => prev === 'X' ? 'O' : 'X')
      const allValues = []
      allButtons.forEach(btn => {
        allValues.push(btn.textContent)
      })
      // console.log(allValues)
      setCount(prev => prev+1)
      const win = winCombination(allValues)
      if (win) {
        setCount(0)
        setGameOver(true)
        setState(win)
        allButtons.forEach(btn => {
          btn.disabled = true
          btn.classList.add('disabled')
          btn.classList.add('game-over')
        })
      }
    }
  }

  return (
    <div className='playground'>
      <h2>{
        !gameOver
          ? `Turn now: ${state}`
          : ( count === 9
            ? `No one won..`
            :  `${state} - is win!`
          )
         
        }
      </h2>
      {gameOver && <button onClick={restartGame} className='restart'>Play again</button>}

      <div className="playground-space">
        <button onClick={handleClick} className='playground-space__btn border__btn-1'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-2'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-3'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-4'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-5'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-6'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-7'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-8'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-9'></button>
      </div>
    </div>
  )
}

export default Playground