"use client";
import { useAuth } from "@/Providers/AuthProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const verifySchema = z.object({
  phone_number: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, {
      message: "Enter a valid 10-digit Indian mobile number",
    }),
});

const page = () => {

  const router = useRouter()
  const { login,isLoggingIn,isLoggingError } = useAuth();  

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      phone_number: "",
    },
  });

  const onSubmit = async(values) =>{
    console.log("Valid phone:", values.phone_number);
    login(values)
    // router.replace('/')
  }


  return (
    <div className="h-full flex flex-col items-center justify-center gap-15">
      <h1 className="text-white font-semibold text-3xl">Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-9 px-8 lg:px-0">
        <div className="flex flex-col w-full items-center gap-2">
          <label className="text-white text-sm self-start lg:mx-15 mx-1">Phone</label>
          <input
            type="text"
            className="bg-primaryDark outline-none h-12 w-full lg:w-[85%] rounded-lg text-white px-4"
            placeholder="Enter Phone"
            inputMode="numeric"
            maxLength={10}
             {...register("phone_number")}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              );
            }}
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm self-start lg:mx-[7.5%] mx-1">
              {errors.phone_number.message || isLoggingError}
            </p>
          )}
        </div>

        <button type="submit"  className="text-black bg-white w-full lg:w-[85%] h-12 rounded-lg text-sm cursor-pointer" >
          {isSubmitting?"Verify..":"Continue"}
        </button>
      </form>
    </div>
  );
};

export default page;
