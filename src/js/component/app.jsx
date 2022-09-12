import React, { useState } from "react";
import PlayerSelect from "./PlayerSelect";
import Board from "./Board";

const App = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [active, setActive] = useState('');
  const [activesymbol, setActivesymbol] = useState('');
  const [board, setBoard] = useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ]);
  const [win, setWin] = useState(false);

  return (
    <>
      <div className="container-fluid text-center">
        <div className="vh-100">
          <div className="row">
            <h1 className="my-4">Tic Tac Toe <small><small>in React.js</small></small></h1>
          </div>
          {(player1 !== "" && player2 !== "" && first !== "") ?
            <Board player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} first={first} setFirst={setFirst} second={second} active={active} setActive={setActive} activesymbol={activesymbol} setActivesymbol={setActivesymbol} board={board} setBoard={setBoard} win={win} setWin={setWin} /> :
            <PlayerSelect player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} first={first} setFirst={setFirst} second={second} setSecond={setSecond} />}
        </div>
      </div>
      <div class="footer fixed-bottom text-center">
          Made with ❤️ by
          <a href="https://github.com/Zagarsix"> Zagarsix</a>
        </div>
    </>
  );
};

export default App;
