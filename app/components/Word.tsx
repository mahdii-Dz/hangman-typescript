"use client";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Context";
import useGetWord from "./useGetWord";

function Word() {
  const { word, setWord, setIsTwoSameLetter, setSameLetter, isTwoSameLetter } =
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
    )
    setIsTwoSameLetter(!!doubledLetter);
    setSameLetter(doubledLetter || "");
  }, [word, setSameLetter, setIsTwoSameLetter]);

  const WordLetter = fetchedWord
    ? Array.from(fetchedWord[0].word.split(""))
    : word;
  console.log(word);


  return (
    <div className="flex gap-2 mt-12">
      {WordLetter.map((Letters, index) => (
        <div key={index} className="w-12 h-1 bg-black"></div>
      ))}
    </div>
  );
}

export default Word;
