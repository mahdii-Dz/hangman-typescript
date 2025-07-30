"use client";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Context";
import useGetWord from "./useGetWord";

function Word() {
  const { word, setWord } = useContext(GlobalContext)!;

  const { data: fetchedWord } = useGetWord();
  console.log(fetchedWord);
  
  useEffect(()=>{
    setWord(fetchedWord?.word[0] || "hello");
  },[setWord,fetchedWord])
  // setWord(fetchedWord?.word || "hello");

  const WordLetter = typeof fetchedWord?.word[0] === "string" ? Array.from(fetchedWord?.word[0].split("")) : Array.from(word.split(""));
  console.log(WordLetter);

  return (
    <div className="flex gap-2 mt-12">
      {WordLetter.map((Letters, index) => (
        <div key={index} className="w-12 h-1 bg-black"></div>
      ))}
    </div>
  );
}

export default Word;
