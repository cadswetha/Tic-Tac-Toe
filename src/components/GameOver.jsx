const GameOver = ({currentPlayer, onRestart}) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{currentPlayer} won!</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};
export default GameOver;
