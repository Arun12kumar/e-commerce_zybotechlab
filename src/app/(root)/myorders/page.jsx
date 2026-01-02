'use client';

import OrderCard from '@/components/OrderCard'
import { useGetAllOrders } from '@/controller/productController'
import React from 'react'

const page = () => {
  const {data:order} = useGetAllOrders();

  console.log(order,"my order")
  return (
    <div className=''>
      <div className=' py-8 lg:py-17 space-y-6'>
        <h1 className="text-4xl font-bold text-white mb-10">My Orders</h1>
        {order?.orders.map((item,index)=>(
          <OrderCard key={index} items={item}/>
        ))}

      </div>
    </div>
  )
}

export default page