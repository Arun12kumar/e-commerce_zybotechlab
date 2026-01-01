import ShoeCards from '@/components/ShoeCards'
import React from 'react'

const page = () => {

  return (
    <div className='w-full py-6 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-4 md:gap-6'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl text-white font-bold'>Men's Jordan Shoes</h1>
      
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-fr'>
        {[...Array(8)].map((_, index) => (
          <ShoeCards key={index} />
        ))}
      </div>
    </div>
  )
}

export default page