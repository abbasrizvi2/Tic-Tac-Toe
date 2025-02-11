/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";
import Square from "./Square";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const users = currentMove % 2 === 0; // for users
//   const currentSquare = history[history.length - 1]; // we got the array here as ["null","null",....]
  const currentSquare = history[currentMove]; 

  let handlePlay = (nextSquare) => {
    const historyMove = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(historyMove);
    setCurrentMove(historyMove.length - 1);
  };

  function jumpTo(movement) {
    setCurrentMove(movement);
  }

  const input = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Go to move: " + move;
    } else {
      description = "Game Start";
    }

    return (
      <li key={move} className="border p-2 m-2 ml-10">
        <button className= "hover:cursor-pointer" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <div className="flex items-center ml-150 h-dvh   border-red-400">
        <Board users={users} squares={currentSquare} onPlay={handlePlay} />
        <ol>{input}</ol>
      </div>
    </div>
  );
};

const Board = ({ users, squares, onPlay }) => {
  const handleClick = (i) => {
    // it can read sqaure and setSquare bcoz of
    // "Closures" --> handleClick come under Boxes function and sqaures and setSquares also
    if (winnerSquare(squares) || squares[i]) return; //  Prevent changing an already filled square it means
    // sqaures[i](truthy) not null already have some value in it so return it
    // if it is false than leave this if statement and move forward

    const nextSquare = squares.slice();
    // *  What does this nextSquare do?
    /*
     * here we are making a shallow copy of squares array
     * bcoz wwe can't directly change the sqaure(mutate)
     * we have to mutate it
     * what nextSquare do it makes a shallow array similar to currentState of sqaure array
     * Now suppose we click on sqaures[3] so a shallow copy will be made of sqaures array
     * nextSquare[3] = "X" ==> [null,null,"X",null.....]
     * now setsqaure(nextSquare) original array ko is new array se replace krdo jisme 3rd index me X <h1>
     * now if u click on sqaure[5] new shallow copy bane gi and wo shallow copy me already
     * [null,null,'X',null,'X'] present tha  isme 5th place pe add ho gya h and than firse setSquare se update ho jaegi value
     */

    if (users) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  };

  const winner = winnerSquare(squares);
  let status;
  if (winner) {
    status = "winner is :  " + winner;
  } else {
    status = "NextPlayer is :  " + (users ? "X" : "O");
  }

  //    console.log("Board Rerenders")
  return (
    <div>
      <div>{status}</div>
      <div className="flex mt-9 items-center border-indigo-700 w-[300px] h-[270px] flex-wrap">
        <Square value={squares[0]} onSqaureClick={() => handleClick(0)} />
        <Square value={squares[1]} onSqaureClick={() => handleClick(1)} />
        <Square value={squares[2]} onSqaureClick={() => handleClick(2)} />
        <Square value={squares[3]} onSqaureClick={() => handleClick(3)} />
        <Square value={squares[4]} onSqaureClick={() => handleClick(4)} />
        <Square value={squares[5]} onSqaureClick={() => handleClick(5)} />
        <Square value={squares[6]} onSqaureClick={() => handleClick(6)} />
        <Square value={squares[7]} onSqaureClick={() => handleClick(7)} />
        <Square value={squares[8]} onSqaureClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

function winnerSquare(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [3, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
