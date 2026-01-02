"use client";

import { useAuth } from "@/Providers/AuthProvider";
import { CircleUserRound, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

const Header = () => {

  const router = useRouter();
  const{token,logout}= useAuth();

  return (
    <div className="h-[10vh] bg-primaryDark flex items-center px-15 justify-between">
      <svg className="cursor-pointer" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=> router.push('/')}>
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
      <div className="flex flex-row gap-3 items-center text-white">
        {token && <CircleUserRound className="cursor-pointer" onClick={()=> router.push('/myorders')}/>}
        {token ? (<p className="cursor-pointer" onClick={()=>logout()}>Log Out</p>):(<p className="cursor-pointer" onClick={()=> router.push('/login')}>Log In</p>)}
        

      </div>
    </div>
  );
};

export default Header;
