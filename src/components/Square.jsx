import React from 'react'

export default function Square({ player, chooseSquare }) {
    return (
        <button type='button' className='w-[100px] disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed h-[90px] mask mask-squircle flex items-center justify-center cursor-pointer hover:scale-[0.98] transition hover:opacity-80 bg-secondary' onClick={chooseSquare} >
            {
                player === "X" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/1792px-X_mark.svg.png" className='w-[40px] h-[40px]' alt="x-mark" />
            }
            {
                player === "O" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1200px-Letter_o.svg.png" className='w-[35px]' alt="o-letter" />
            }
        </button>
    )
}
