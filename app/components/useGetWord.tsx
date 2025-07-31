"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type wordType = {
  word: string
  length: number
  category: string
  language: 'en' | string
};

type wordResponse = [wordType]

async function fetchWord(): Promise<wordResponse> {
  const res = await fetch("https://random-words-api.kushcreates.com/api?language=en&length=5&type=uppercase&words=1");
  if (!res.ok) {
    throw new Error("Failed to fetch word");
  }
  return res.json();
}

function useGetWord() {
  return useQuery({
    queryKey: ["word"],
    queryFn: fetchWord,
    refetchOnWindowFocus: false,
  });
}

export default useGetWord;
