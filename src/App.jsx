import { useState, useEffect } from 'react'
import Square from './components/Square';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { winningConditions } from './patterns';



export default function App() {


  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [board, setBoard] = useState(() => {
    return Array(9).fill(null)
  })

  const [result, setResult] = useState({
    winner: "",
    state: "none",
    winningCondition: []
  })


  useEffect(() => {
    checkWinner()
    checkDraw();
  }, [board])

  useEffect(() => {
    if (result.state === "won") {
      toast.dismiss()
      toast.success(`Player ${result.winner} wins!`, { autoClose: 1000 })
    }
    if (result.state === "draw") {
      toast.info("It's a draw!", { autoClose: 1000 });
    }
  }, [result])





  const handleChooseSquareClick = (square) => {
    if (board[square] || result.state === "won" || result.state === "draw") return;

    setBoard(prevBoard =>
      prevBoard.map((val, index) => (index === square ? currentPlayer : val))
    );
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    winningConditions.forEach(condition => {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setResult({
          winner: board[a],
          state: "won",
          winningCondition: condition
        });
      }
    });
  };

  const checkDraw = () => {
    // If no winner and all squares are filled, it's a draw
    if (!board.includes(null) && result.state === "none") {
      setResult({
        winner: "",
        state: "draw",
        winningCondition: []
      });
    }
  };

  const handleRestartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setResult({ winner: "", state: "none", winningCondition: [] });
    toast.dismiss()
    toast.info("Game restarted", { autoClose: 500 });
  };






  return (
    <div className='grid min-h-screen sw-full place-content-center'>
      <p className="fixed font-semibold -translate-x-1/2 top-2 left-1/2 badge badge-error badge-lg">{currentPlayer}'s Turn</p>
      <div className='flex flex-col items-center justify-center p-1 shadow-lg bg-base-300 rounded-box border-neutral'>
        <div className='flex -space-x-1.5 items-center'>
          <Square
            chooseSquare={() => handleChooseSquareClick(0)}
            squareNumber={0}
            player={board[0]}
            result={result}
            board={board}
          />
          <Square
            chooseSquare={() => handleChooseSquareClick(1)}
            squareNumber={1}
            player={board[1]}
            result={result}
            board={board}
          />
          <Square
            chooseSquare={() => handleChooseSquareClick(2)}
            squareNumber={2}
            player={board[2]}
            result={result}
            board={board}
          />
        </div>
        <div className='flex -space-x-1.5 items-center'>
          <Square chooseSquare={() => handleChooseSquareClick(3)}
            squareNumber={3}
            player={board[3]}
            result={result}
            board={board}
          />
          <Square chooseSquare={() => handleChooseSquareClick(4)}
            squareNumber={4}
            player={board[4]}
            result={result}
            board={board}
          />
          <Square chooseSquare={() => handleChooseSquareClick(5)}
            squareNumber={5}
            player={board[5]}
            result={result}
            board={board}
          />
        </div>
        <div className='flex items-center -space-x-1.5'>
          <Square chooseSquare={() => handleChooseSquareClick(6)}
            squareNumber={6}
            player={board[6]}
            result={result}
            board={board}
          />
          <Square chooseSquare={() => handleChooseSquareClick(7)}
            squareNumber={7}
            player={board[7]}
            result={result}
            board={board}
          />
          <Square chooseSquare={() => handleChooseSquareClick(8)}
            squareNumber={8}
            player={board[8]}
            result={result}
            board={board}
          />
        </div>

      </div>
      <div className='flex flex-col items-center justify-center mt-4'>
        <button type="button" disabled={board.every(indx => indx === null)} className='cursor-pointer btn btn-error btn-sm' onClick={handleRestartGame}>Restart</button>
      </div>
      <ToastContainer />
    </div>
  )
}





