"use client";
import React, { createContext, ReactNode, useState } from "react";

type GlobalContextType = {
  word: string[];
  setWord: React.Dispatch<React.SetStateAction<string[]>>;
  isTwoSameLetter: boolean;
  setIsTwoSameLetter: React.Dispatch<React.SetStateAction<boolean>>;
  SameLetter: string;
  setSameLetter: React.Dispatch<React.SetStateAction<string>>;
  correctLetters: string[];
  setCorrectLetters: React.Dispatch<React.SetStateAction<string[]>>;
  gameEnd: boolean;
  setGameEnd: React.Dispatch<React.SetStateAction<boolean>>;
  gameState: gameStateType | string;
  setGameState: React.Dispatch<React.SetStateAction<gameStateType>>
};

type gameStateType = 'win' | 'lose' | string

export const GlobalContext = createContext<GlobalContextType | null>(null);

function Context({ children }: { children: ReactNode }) {
  const [word, setWord] = useState<string[]>(["H", "E", "L", "L", "O"]);
  const [isTwoSameLetter, setIsTwoSameLetter] = useState(false);
  const [SameLetter, setSameLetter] = useState("");
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [gameEnd, setGameEnd] = useState(false);
  const [gameState,setGameState] = useState<gameStateType | string>('')

  console.log(SameLetter, isTwoSameLetter);

  return (
    <GlobalContext.Provider
      value={{
        word,
        setWord,
        isTwoSameLetter,
        setIsTwoSameLetter,
        SameLetter,
        setSameLetter,
        correctLetters,
        setCorrectLetters,
        gameEnd,
        setGameEnd,
        gameState,
        setGameState
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
