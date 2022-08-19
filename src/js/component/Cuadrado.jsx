import React, { useState } from "react";
import Cuadrado from "./cuadrado";

function Board() {
  const [cuadrados, setCuadrados] = useState(Array(9));
  const [vaX, setVaX] = useState(true);
  const handleClick = (i) => {
    if (calcularGanador(cuadrados) || cuadrados[i]) {
      return;
    }
    cuadrados[i] = vaX ? "X" : "O";
    setCuadrados(cuadrados);
    setVaX(!vaX);
  };
  const ganador = calcularGanador(cuadrados);
  let mensaje;


  if (ganador) {
    mensaje = `Winner: ${ganador}`;
   
  } else {
    mensaje = "Next player: " + (vaX ? "X" : "O");
    
  }
  function calcularGanador(cuadrados) {
    const patronGanador = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < patronGanador.length; i++) {
      const [a, b, c] = patronGanador[i];
      if (
        cuadrados[a] &&
        cuadrados[a] === cuadrados[b] &&
        cuadrados[a] === cuadrados[c]
      ) {
        return cuadrados[a];
      }
    }
    return null;
  }
  const restart = () => {
    setVaX(true);
    setCuadrados(Array(9).fill(null));
  };
  return (
    <div className="board ">
      <div className="status">{mensaje}</div>
      <div className=" d-flex justify-content-center caja">
        <div className="board-row ms-10">
          <Cuadrado valor={cuadrados[0]} onClick={() => handleClick(0)} top="#6d757d" bottom="" left="#6d757d" right="" />
          <Cuadrado valor={cuadrados[1]} onClick={() => handleClick(1)} top="" bottom="" left="#6d757d" right="" />
          <Cuadrado valor={cuadrados[2]} onClick={() => handleClick(2)} top="" bottom="#6d757d" left="#6d757d" right="" />
        </div>
        <div className="board-row">
          <Cuadrado valor={cuadrados[3]} onClick={() => handleClick(3)} top="#6d757d" bottom="" left="" right="" />
          <Cuadrado valor={cuadrados[4]} onClick={() => handleClick(4)} top="" bottom="" left="" right="" />
          <Cuadrado valor={cuadrados[5]} onClick={() => handleClick(5)} top="" bottom="#6d757d" left="" right="" />
        </div>
        <div className="board-row">
          <Cuadrado valor={cuadrados[6]} onClick={() => handleClick(6)} top="#6d757d" bottom="" left="" right="#6d757d" />
          <Cuadrado valor={cuadrados[7]} onClick={() => handleClick(7)} top="" bottom="" left="" right="#6d757d" />
          <Cuadrado valor={cuadrados[8]} onClick={() => handleClick(8)} top="" bottom="#6d757d" left="" right="#6d757d" />
        </div>
      </div>

      
      <button className="restart" onClick={restart}>
        Restart Game!
      </button>
    </div>
  );
}

export default Board;