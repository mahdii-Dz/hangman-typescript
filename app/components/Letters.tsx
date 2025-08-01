"use client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Context";

function Letters() {
  const Letters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const {
    word,
    isTwoSameLetter,
    SameLetter,
    correctLetters,
    setCorrectLetters,
    setGameEnd,
    setGameState,
  } = useContext(GlobalContext)!;
  const [sameLetterInput, setSameLetterInput] = useState(0);
  const [clickedLetter, setClickedLetter] = useState<string[]>([]);
  function handleLetterClick(e: React.MouseEvent, letter: string) {
    if (
      clickedLetter.length === 8 ||
      (clickedLetter.includes(letter) && !isTwoSameLetter)
    ) {
      setGameEnd(true);
      if (correctLetters.length === word.length) {
        setGameState("win");
      } else {
        setGameState("lose");
      }
      return;
    }
    if (letter == SameLetter) setSameLetterInput(sameLetterInput + 1);
    if (sameLetterInput >= 2 && letter == SameLetter) return;

    setClickedLetter([...clickedLetter, letter]);
    e.preventDefault();
    if (word.includes(letter) && correctLetters.length < 5) {
      setCorrectLetters([...correctLetters, letter]);
      e.currentTarget.classList.add("bg-blue-400", "text-white");
    } else {
      e.currentTarget.classList.add(
        "!cursor-not-allowed",
        "bg-gray-300",
        "text-gray-500"
      );
      e.currentTarget.children.item(0)?.classList.add("!cursor-not-allowed");
      e.currentTarget.classList.remove("hover:bg-blue-400");
      e.currentTarget.classList.remove("hover:text-white");
    }
  }

  console.log(clickedLetter, correctLetters);

  return (
    <section className="sm:w-140 w-full px-8 h-auto flex flex-wrap gap-2 ">
      {Letters.map((letter) => (
        <button
          key={letter}
          disabled={
            clickedLetter.includes(letter) &&
            !isTwoSameLetter &&
            sameLetterInput < 2
          }
          onClick={(e) => handleLetterClick(e, letter)}
          className="w-12 h-12 select-none cursor-pointer border flex justify-center items-center font-bold text-lg hover:bg-blue-400 hover:text-white"
        >
          <span className="cursor-pointer">{letter}</span>
        </button>
      ))}
    </section>
  );
}

export default Letters;
