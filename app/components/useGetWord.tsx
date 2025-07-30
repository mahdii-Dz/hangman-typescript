"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type wordResponse = {
  word: string[];
};

async function fetchWord(): Promise<wordResponse> {
  const res = await fetch("https://api.api-ninjas.com/v1/randomword", {
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_Random_Word_APi || "",
    },
  });
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
