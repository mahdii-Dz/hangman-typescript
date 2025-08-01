"use client";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Context";
import useGetWord from "./useGetWord";

function Word() {
  const { word, setWord, setIsTwoSameLetter, setSameLetter, correctLetters , gameEnd } =
    useContext(GlobalContext)!;

  const { data: fetchedWord } = useGetWord();

  useEffect(() => {
    setWord(
      (fetchedWord && fetchedWord[0].word.split("")) || [
        "H",
        "E",
        "L",
        "L",
        "O",
      ]
    );
  }, [setWord, fetchedWord]);

  useEffect(() => {
    const doubledLetter = word.find((letter, index) =>
      word.slice(index + 1).includes(letter)
    );
    setIsTwoSameLetter(!!doubledLetter);
    setSameLetter(doubledLetter || "");
  }, [word, setSameLetter, setIsTwoSameLetter]);

  const WordLetter = fetchedWord
    ? Array.from(fetchedWord[0].word.split(""))
    : word;
  console.log(word);

  return (
    <div className="flex flex-col gap-2 mt-8">
      {/* <div className="flex gap-6">
      {WordLetter.map((letter, index) => (
        <h3 key={index} className="text-6xl font-bold">
          {letter}
        </h3>
      ))}
      </div> */} 
      <div className="flex gap-3 justify-center">
      {WordLetter.map((letter, index) => (
        <div key={index} className="text-center">
          <h3 className={`text-6xl font-bold invisible ${correctLetters.includes(letter) ? 'visible' : ''} ${gameEnd && !correctLetters.includes(letter) ? 'text-red-500 visible' : ''}`}>{letter}</h3>
          <div className="w-14 h-1 bg-black"></div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Word;
