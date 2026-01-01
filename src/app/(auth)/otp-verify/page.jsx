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
    e ,
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
              className="bg-primaryDark outline-none h-12 lg:h-22 w-[20%] lg:w-36 rounded-lg text-white text-center text-lg lg:text-3xl"
              placeholder="_"
            />
          ))}

          </div>

        </div>
        <div className="text-white/60 self-start lg:px-15">Resend OTP in <span className="text-white">36s</span></div>
        <button onClick={()=> router.replace('/welcome-name')} className="cursor-pointer text-black bg-white w-full lg:w-[85%] h-12 rounded-lg text-sm">Verify</button>
      </div>
    </div>
  );
};

export default page;
