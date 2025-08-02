"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

function GameEnd() {
  const { gameEnd, gameState } = useContext(GlobalContext)!;

  function handleClick(){
    window.location.reload()
  }
  return (
    <>
    <div className="absolute top-16 left-8">
        {gameEnd && gameState == "win" ? (
        <h1 className="text-6xl font-bold mt-8 inline">
          You <span className="text-green-500">Won</span>
        </h1>
      ) : gameEnd && gameState == "lose" ? (
        <h1 className="text-6xl font-bold mt-8 inline">
          You <span className="text-red-500">lost</span>
        </h1>
      ) : null}
    </div>
      
      {gameEnd ? (
        <button onClick={handleClick} className="absolute top-16 right-8 bg-blue-500 inline ml-8 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded mt-4">
          New Game
        </button>
      ) : null}
    </>
  );
}

export default GameEnd;
