import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import Player from "./components/Player";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";
const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveCurrentBoard(gameTurn) {
  let currentBoard = [...INITIAL_BOARD.map((row) => [...row])];
  for (let i = 0; i < gameTurn.length; i++) {
    const { square, player } = gameTurn[i];
    const { row, col } = square;
    currentBoard[row][col] = player;
  }
  return currentBoard;
}

function deriveCurrentPlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0) {
    currentPlayer = gameTurn[0].player === "X" ? "O" : "X";
  }
  return currentPlayer;
}

function deriveHasWinner(currentBoard) {
  let haveWinner = false;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = currentBoard[combination[0].row][combination[0].column];
    const secondSquare =
      currentBoard[combination[1].row][combination[1].column];
    const thirdSquare = currentBoard[combination[2].row][combination[2].column];
    if (
      firstSquare &&
      firstSquare == secondSquare &&
      firstSquare == thirdSquare
    ) {
      haveWinner = true;
    }
  }
  return haveWinner;
}
function App() {
  const [gameTurn, setGameTurn] = useState([]);

  const handleButtonClick = (rowIndex, colIndex) => {
    setGameTurn((prevTurns) => {
      let playerSymbol =
        prevTurns.length > 0 ? (prevTurns[0].player === "X" ? "O" : "X") : "X";
      return [
        { square: { row: rowIndex, col: colIndex }, player: playerSymbol },
        ...prevTurns,
      ];
    });
  };

  const onRestart = () => {
    setGameTurn([]);
  };

  let currentPlayer = deriveCurrentPlayer(gameTurn);

  let currentBoard = deriveCurrentBoard(gameTurn);

  let haveWinner = deriveHasWinner(currentBoard);

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              defaultName="Player 1"
              playerSymbol="X"
              isActive={currentPlayer === "X"}
            />
            <Player
              defaultName="Player 2"
              playerSymbol="O"
              isActive={currentPlayer === "O"}
            />
          </ol>
          <GameBoard
            handleOnClick={handleButtonClick}
            currentBoard={currentBoard}
          />
          {(haveWinner || gameTurn.length == 9) && (
            <GameOver
              currentPlayer={haveWinner ? gameTurn[0].player : "None"}
              onRestart={onRestart}
            />
          )}
        </div>
        <Logs gameTurn={gameTurn} />
      </main>
    </>
  );
}

export default App;
