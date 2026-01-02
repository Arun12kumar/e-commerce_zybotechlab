import Image from 'next/image'
import React from 'react'

const OrderCard = ({items}) => {
  return (
    <div className='flex flex-row bg-card px-4 py-4 sm:px-5 sm:py-5 w-full md:w-[60vw] lg:w-[40vw] h-auto min-h-[120px] sm:min-h-[140px] md:h-[18vh] lg:h-[20vh] items-center justify-between rounded-xl'>
        {/* Image Container */}
        <div className='bg-primaryDark w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-full lg:w-30 rounded-lg relative overflow-hidden flex-shrink-0'>
            <Image 
                src='/images/image1.png' 
                width={100} 
                height={100} 
                alt='orderitems' 
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-27 lg:h-27 object-contain'
            />
            <svg
                width="50"
                height="50"
                viewBox="0 0 312 229"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-6 -left-1 sm:-top-7 sm:left-2 md:-top-8 md:left-2 lg:-top-9 lg:left-3 z-10 w-[85%] h-[85%] sm:w-[87%] sm:h-[87%] md:w-[88%] md:h-[88%] lg:w-[90%] lg:h-[90%]"
            >
                <circle cx="182" cy="37" r="192" fill="#9ADA2A" />
            </svg>
            <p className='text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-black italic absolute top-2 -left-1 sm:top-2 sm:-left-1 md:top-2 md:-left-1 lg:top-3 lg:-left-2 z-0 text-white/10'>NIKE</p>
        </div>
        
        {/* Product Info */}
        <div className='flex-1 ml-2 sm:ml-5 md:ml-6'>
            <p className='text-sm sm:text-xl md:text-2xl text-white truncate'>{items?.product_name}</p>
            <p className='text-xs sm:text-base text-white mt-1'>{items?.order_id}</p>
            <p className='text-xs sm:text-sm text-white mt-1'>{items?.created_date}</p>
        </div>
        
        {/* Price Section */}
        <div className='flex flex-col sm:flex-row sm:gap-2 items-end sm:items-center ml-2 sm:ml-0'>
            <p className='text-[12px] sm:text-md text-white'>₹{items?.product_price}</p>
            <p className='text-[9px] sm:text-sm line-through text-white/40'>₹{items?.product_mrp}</p>
        </div>
    </div>
  )
}

export default OrderCard