import { useState } from "react";

const Logs = ({gameTurn}) => {
  return (
    <ol id="log">
      {
        gameTurn.map(turn => {
            return <li key={`${turn.square.row},${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>
        })
      }
    </ol>
  );
};
export default Logs;
