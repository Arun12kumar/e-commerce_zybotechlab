import OrderCard from '@/components/OrderCard'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen'>
      <div className=' py-8 lg:py-17 space-y-6'>
        <h1 className="text-4xl font-bold text-white mb-10">My Orders</h1>
        <OrderCard/>
        <OrderCard/>
      </div>
    </div>
  )
}

export default page