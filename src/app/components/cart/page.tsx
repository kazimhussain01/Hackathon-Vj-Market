import { ShoppingBag } from 'lucide-react'
import React from 'react'

const cart = () => {
  return (
    <div className='lg:py-5 md:py-5'>
      <h1 className='text-4xl font-bold lg:ml-28 md:ml-16 ml-6'>Shopping Cart</h1>
      <div className='flex-col flex items-center justify-center lg:py-10 md:py-10 py-16'>
        <ShoppingBag className='h-40 w-40'/>
        <h2 className='py-3 lg:text-3xl md:text-3xl text-2xl font-bold font-sans'>Your shopping bag is empty</h2>
      </div>
    </div>
  )
}

export default cart
