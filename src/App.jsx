import React, { useState } from 'react'
import Square from './components/Square';

const winningsPossibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];




export default function App() {



  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [board, setBoard] = useState(() => {
    return Array(9).fill(null)
  })





  return (
    <div className='grid min-h-screen sw-full place-content-center'>
      <div className='flex flex-col items-center justify-center p-1 shadow-lg bg-base-300 rounded-box border-neutral'>
        <div className='flex -space-x-1.5 items-center'>
          <Square chooseSquare={() => handleChooseClick(0)} player={board[0]} />
          <Square chooseSquare={() => handleChooseClick(1)} player={board[1]} />
          <Square chooseSquare={() => handleChooseClick(2)} player={board[2]} />
        </div>
        <div className='flex -space-x-1.5 items-center'>
          <Square chooseSquare={() => handleChooseClick(3)} player={board[3]} />
          <Square chooseSquare={() => handleChooseClick(4)} player={board[4]} />
          <Square chooseSquare={() => handleChooseClick(5)} player={board[5]} />
        </div>
        <div className='flex items-center -space-x-1.5'>
          <Square chooseSquare={() => handleChooseClick(6)} player={board[6]} />
          <Square chooseSquare={() => handleChooseClick(7)} player={board[7]} />
          <Square chooseSquare={() => handleChooseClick(8)} player={board[8]} />
        </div>

      </div>
      <div className='flex justify-center mt-4'>
        <button type="Square" className='cursor-pointer btn btn-error btn-sm' >Restart</button>
      </div>
    </div>
  )
}





