import React from "react";

const PlayerSelect = (props) => {
  return (
    <>
      <div className="mt-5 row justify-content-center align-items-center">
        <div className="p-5 col-md-6 bg-dark bg-opacity-75">
          <h3>SET PLAYERS</h3>
          <input
            type="text"
            id="player1"
            onChange={(e) => props.setPlayer1(e.target.value)}
            placeholder="Player 1 username"
          />
          <input
            type="text"
            id="player2"
            onChange={(e) => props.setPlayer2(e.target.value)}
            placeholder="Player 2 username"
          />
          <br />
          <h4 className="mt-2">{props.player1} choose your weapon</h4>
          <button
            onClick={(e) => {
              props.setFirst(e.target.value), props.setSecond("O");
            }}
            className="weapon-red mt-2 me-4 display-4 py-2 px-4"
            id="x"
            value="X"
          >
            X
          </button>
          <button
            onClick={(e) => {
              props.setFirst(e.target.value), props.setSecond("X");
            }}
            className="weapon-green mt-2 ms-4 display-4 py-2 px-4"
            id="o"
            value="O"
          >
            O
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerSelect;
