"use client";
import React, { createContext, ReactNode, useState } from "react";

type GlobalContextType = {
  word: string[];
  setWord: React.Dispatch<React.SetStateAction<string[]>>;
  isTwoSameLetter: boolean;
  setIsTwoSameLetter: React.Dispatch<React.SetStateAction<boolean>>;
  SameLetter: string;
  setSameLetter: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

function Context({ children }: { children: ReactNode }) {
  const [word, setWord] = useState<string[]>(["H", "E", "L", "L", "O"]);
  const [isTwoSameLetter, setIsTwoSameLetter] = useState(false);
  const [SameLetter, setSameLetter] = useState("");

  console.log(SameLetter,isTwoSameLetter);
  

  return (
    <GlobalContext.Provider
      value={{
        word,
        setWord,
        isTwoSameLetter,
        setIsTwoSameLetter,
        SameLetter,
        setSameLetter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
