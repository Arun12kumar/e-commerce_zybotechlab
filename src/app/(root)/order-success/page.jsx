import OrderCard from "@/components/OrderCard";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex py-5 justify-center w-full ">
      <div className="h-auto sm:h-[50vh] w-full flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6">
        {/* SVG Icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <svg 
            viewBox="0 0 52 52" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g clipPath="url(#clip0_5_1288)">
              <path
                d="M54.1667 6.5L13.8667 33.0539C10.7317 34.3803 8.09901 35.0435 5.96877 35.0435C3.55717 35.0435 1.80877 34.1994 0.723549 32.5113C0.0402639 31.4261 -0.160702 30.0495 0.12065 28.3815C0.402003 26.7134 1.14558 24.9349 2.35137 23.0458C3.35621 21.5185 4.94384 18.742 7.23485 16.25C6.43099 17.5362 5.92857 19.6294 5.60703 20.9959C5.00413 23.5683 5.54674 25.4574 7.23485 26.6632C8.03872 27.2259 9.14403 27.5072 10.5508 27.5072C11.6762 27.5072 12.9423 27.3264 14.3491 26.9646L54.1667 6.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_1288">
                <rect width="52" height="52" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        
        {/* Success Message */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
          Successfully Ordered!
        </h1>
        
        {/* Date/Time */}
        <p className="text-white/40 text-sm sm:text-base md:text-md text-center">
          12:34 PM, 20th Dec 2025
        </p>
        
        {/* Order Card Container with responsive constraints */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-4 sm:mt-6">
          <OrderCard />
        </div>
        
        {/* Optional: Add responsive spacing/padding for very small screens */}
        <div className="h-4 sm:h-0"></div>
      </div>
    </div>
  );
};

export default page;