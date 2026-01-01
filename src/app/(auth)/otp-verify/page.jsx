"use client";

import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter()
  return (
    <div className="h-full flex flex-col items-center justify-center gap-15">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-white font-semibold text-3xl">Verify Phone</h1>

        <div className="flex gap-2 items-center">
          <h1 className="text-white text-sm">Enter the OTP sent to +91-9987654321</h1>
          <Pencil size={16} className="text-white cursor-pointer" onClick={() => router.replace('/login')}/>
        </div>

      </div>

      <div className="w-full flex flex-col items-center gap-9 px-8 lg:px-0">
        <div className="flex flex-col w-full items-center gap-2">
          <label className="text-white text-sm self-start mx-1 lg:mx-15">Enter OTP</label>
          <div className="flex justify-between w-full lg:w-[85%]">
            <input
              type="text"
              className="bg-primaryDark outline-none lg:h-22 h-12 w-[20%] lg:w-36 rounded-lg text-white text-center text-lg lg:text-3xl"
              placeholder="_"
              inputMode="numeric"
              maxLength={1}
              pattern="[0-9]"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
            />
            <input
              type="text"
              className="bg-primaryDark outline-none lg:h-22 h-12 w-[20%] lg:w-36 rounded-lg text-white text-center text-lg lg:text-3xl"
              placeholder="_"
              inputMode="numeric"
              maxLength={1}
              pattern="[0-9]"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
            />
            <input
              type="text"
              className="bg-primaryDark outline-none lg:h-22 h-12 w-[20%] lg:w-36 rounded-lg text-white text-center text-lg lg:text-3xl"
              placeholder="_"
              inputMode="numeric"
              maxLength={1}
              pattern="[0-9]"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
            />
            <input
              type="text"
              className="bg-primaryDark outline-none lg:h-22 h-12 w-[20%] lg:w-36 rounded-lg text-white text-center text-lg lg:text-3xl"
              placeholder="_"
              inputMode="numeric"
              maxLength={1}
              pattern="[0-9]"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
            />



          </div>

        </div>
        <div className="text-white/60 self-start lg:px-15">Resend OTP in <span className="text-white">36s</span></div>
        <button onClick={()=> router.replace('/welcome-name')} className="cursor-pointer text-black bg-white w-full lg:w-[85%] h-12 rounded-lg text-sm">Verify</button>
      </div>
    </div>
  );
};

export default page;
