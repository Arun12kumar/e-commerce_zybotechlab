"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter()
  return (


    <div className="h-full flex flex-col items-center justify-center gap-15">
      <h1 className="text-white font-semibold text-3xl">Welcome, You are?</h1>
      <div className="w-full flex flex-col items-center gap-9 px-8 lg:px-0">
        <div className="flex flex-col w-full items-center gap-2">
          <label className="text-white text-sm self-start lg:mx-15 mx-1">Name</label>
          <input
            type="text"
            className="bg-primaryDark outline-none h-12 w-full lg:w-[85%] rounded-lg text-white px-4"
            placeholder="Eg: john Mathe"
          />
        </div>

        <button className="text-black bg-white w-full lg:w-[85%] h-12 rounded-lg text-sm cursor-pointer" onClick={() => router.replace('/')}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default page;
