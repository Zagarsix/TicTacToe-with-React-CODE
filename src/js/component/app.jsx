import React, { useState } from "react";
import Board from './board';
import PlayerSelect from './PlayerSelect';


function App() {
  const [startGame, setStartGame] = useState({
    start: false,
  });


  const [player1, setPlayer1] = useState({
    name: "",
    symbol: "X",
  });

  const [player2, setPlayer2] = useState({
    name: "",
    symbol: "O",
  });

  const [whoStarts, setWhoStarts] = useState({
    symbol: "",
  });

  const handleChange = (e) => {
    setPlayer1({ ...player1, name: e.target.value });
  };

  const handleChange2 = (e) => {
    setPlayer2({ ...player2, name: e.target.value });
  };

  

  return (
    <>
      <div className="container-fluid pt-5 vh-100 text-center text-light ">
        <div className="">
          <h1 className="header-title fw-bold">
            Tic Tac Toe <span className="smaller">in React.js</span>
          </h1>
          {startGame.start ? (
            <Board  />
          ) : (
            <PlayerSelect
              startGame={startGame}
              setStartGame={setStartGame}
              handleChange={handleChange}
              handleChange2={handleChange2}
              
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;