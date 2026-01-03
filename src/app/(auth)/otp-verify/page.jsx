"use client";

import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const page = () => {
  const OTP_LENGTH = 4;
  const router = useRouter()
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e,
    index
  ) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 md:gap-10 lg:gap-15 px-4">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-3 w-full max-w-md lg:max-w-lg">
        <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-3xl text-center">
          Verify Phone
        </h1>

        <div className="flex gap-2 items-center justify-center flex-wrap">
          <h1 className="text-white text-xs sm:text-sm text-center">
            Enter the OTP sent to +91-9987654321
          </h1>
          <Pencil 
            size={16} 
            className="text-white cursor-pointer flex-shrink-0" 
            onClick={() => router.replace('/login')}
          />
        </div>
      </div>

      {/* OTP Input Section */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center gap-6 md:gap-8 lg:gap-9">
        <div className="flex flex-col w-full items-center gap-2">
          <label className="text-white text-sm self-start ml-1 sm:ml-2 md:ml-4 lg:mx-15">
            Enter OTP
          </label>
          <div className="flex justify-between w-full gap-2 sm:gap-3 md:gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="bg-primaryDark outline-none h-12 md:h-14 lg:h-22 w-full rounded-lg text-white text-center text-lg md:text-xl lg:text-3xl"
                placeholder="_"
              />
            ))}
          </div>
        </div>

        {/* Resend OTP */}
        <div className="text-white/60 text-xs sm:text-sm self-start ml-1 sm:ml-2 md:ml-4 lg:px-15">
          Resend OTP in <span className="text-white">36s</span>
        </div>

        {/* Verify Button */}
        <button 
          onClick={()=> router.replace('/register')} 
          className="cursor-pointer text-black bg-white w-full h-12 md:h-14 rounded-lg text-sm md:text-base font-medium hover:bg-gray-100 transition-colors duration-200"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default page;
