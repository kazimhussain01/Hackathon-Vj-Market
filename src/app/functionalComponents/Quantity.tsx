'use client'
import React from 'react'
import { useState } from 'react';


const Quantity = () => {
    const [num, setNum] = useState(0)

    const Minus = () => {
        setNum(num <= 1 ? 1 : num - 1);
    }

    const Plus = () => {
        setNum(num + 1);
    }

  return (
    <div className='mt-12 flex'>
    {/* Text */}  
      <h1 className='text-lg flex justify-center items-center font-semibold font-sans'>Quantity:</h1>

    {/* Button */}
    <div className='flex space-x-0 ml-8 gap-7'>
    <div onClick={Minus} className='flex items-center justify-center text-3xl h-10 w-10 bg-gray-200 rounded-full cursor-pointer'>-</div>
    <div className='text-2xl font-sans'>{num}</div>
    <div onClick={Plus} className='flex items-center justify-center text-3xl h-10 w-10
    bg-gray-200 rounded-full cursor-pointer'>+</div>
    </div>
    </div>
  )
}

export default Quantity;
