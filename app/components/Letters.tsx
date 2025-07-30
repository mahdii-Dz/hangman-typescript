import React from 'react'

function Letters() {
    const Letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  return (
    <section className='sm:w-140 w-full px-8 h-auto flex flex-wrap gap-2'>
        {
            Letters.map((letter)=>(
                <div key={letter} className='w-12 h-12 select-none cursor-pointer border flex justify-center items-center font-bold text-lg hover:bg-blue-400 hover:text-white'>
                   <span>{letter}</span>
                </div>
            ))
        }
    </section>
  )
}

export default Letters