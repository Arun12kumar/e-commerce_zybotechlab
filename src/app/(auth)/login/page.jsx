import React from 'react'

const page = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center gap-15'>
      <h1 className='text-white font-semibold text-3xl'>Log In</h1>
      <div className='w-full flex flex-col items-center gap-9'>
        <div className='flex flex-col w-full items-center gap-2'>
          <label className='text-white text-sm self-start mx-15'>Phone</label>
          <input type="text" className='bg-primaryDark outline-none h-12 w-[85%] rounded-lg text-white px-4' placeholder='Enter Phone'/>
        </div>
        <button className='text-black bg-white w-[85%] h-12 rounded-lg text-sm'>Continue</button>

      </div>
    </div>
  )
}

export default page