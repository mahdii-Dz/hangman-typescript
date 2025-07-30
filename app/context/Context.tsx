'use client'
import React, { createContext, ReactNode, useState } from 'react'

type GlobalContextType = {
    word: string,
    setWord: React.Dispatch<React.SetStateAction<string>>
}
 
export const GlobalContext = createContext<GlobalContextType | null>(null)

function Context({children}:{children: ReactNode}) {
    const [word,setWord] = useState('hello')
  return (
    <GlobalContext.Provider value={{word , setWord}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default Context