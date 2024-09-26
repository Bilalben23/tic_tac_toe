import React from 'react'

export default function Square({ player, chooseSquare, board, squareNumber, result }) {
    return (
        <button
            className={`w-[100px] h-[90px] mask mask-squircle flex items-center justify-center cursor-pointer transition bg-secondary ${result.state === "won" && result.winningCondition.includes(squareNumber) ? 'opacity-50' : 'opacity-100'} ${result.state !== "none" && !result.winningCondition.includes(squareNumber) ? 'cursor-not-allowed' : 'active:scale-[0.98] active:opacity-80'}`}
            onClick={chooseSquare}
            disabled={!!board[squareNumber] || result.state === "won" || result.state === "draw"}
        >
            {
                player === "X" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/1792px-X_mark.svg.png" className='w-[40px] h-[40px]' alt="x-mark" />
            }
            {
                player === "O" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1200px-Letter_o.svg.png" className='w-[35px]' alt="o-letter" />
            }

        </button>
    )
}


