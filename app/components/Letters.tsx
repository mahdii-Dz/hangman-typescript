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
  const { word, isTwoSameLetter, SameLetter } = useContext(GlobalContext)!;
  const [sameLetterInput, setSameLetterInput] = useState(1);
  const [clickedLetter, setClickedLetter] = useState<string[]>([]);
  function handleLetterClick(e: React.MouseEvent, letter: string) {
    if (clickedLetter.length === 6) return;
    if (clickedLetter.includes(letter) && !isTwoSameLetter) return;
    setClickedLetter([...clickedLetter, letter]);
    if (letter == SameLetter && isTwoSameLetter && sameLetterInput < 2) {
      setSameLetterInput(sameLetterInput < 2 ? sameLetterInput + 1 : 1)
      return
    }
    e.preventDefault();
    console.log(e);
    e.currentTarget.classList.add("!cursor-not-allowed");
    e.currentTarget.children.item(0)?.classList.add("!cursor-not-allowed");
    e.currentTarget.classList.add("bg-gray-300");
    e.currentTarget.classList.add("text-gray-500");
    e.currentTarget.classList.remove("hover:bg-blue-400");
    e.currentTarget.classList.remove("hover:text-white");
  }

  console.log(clickedLetter);

  return (
    <section className="sm:w-140 w-full px-8 h-auto flex flex-wrap gap-2 ">
      {Letters.map((letter) => (
        <button
          key={letter}
          disabled={clickedLetter.includes(letter) && !isTwoSameLetter}
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
