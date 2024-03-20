import { useState } from "react";

const GameBoard = ({ handleOnClick, currentBoard }) => {
  return (
    <ol id="game-board">
      {currentBoard.map((eachRow, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {eachRow.map((eachCol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleOnClick(rowIndex, colIndex)}
                  disabled={
                    currentBoard[rowIndex][colIndex] != null ? true : false
                  }
                >
                  {eachCol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
