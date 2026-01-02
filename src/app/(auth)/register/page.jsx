"use client";
import { useRegister } from "@/controller/authController";
import { useAuthStore } from "@/store/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const verifySchema = z.object({
  phone_number: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, {
      message: "Enter a valid 10-digit Indian mobile number",
    }),
    name:z.string().min(4,"Enter name")
});

const page = () => {
  const router = useRouter()
  const registerMutation = useRegister()
  const {  setToken } = useAuthStore();

    const {
      register,
      handleSubmit,
      formState: { errors,isSubmitting },
    } = useForm({
      resolver: zodResolver(verifySchema),
      defaultValues: {
        phone_number: "",
        name:""
      },
    });

  const onSubmit = async(values) =>{

    console.log(values,"test")
    try {
      const data = await registerMutation.mutateAsync(values); 
      console.log(data,"login")

      if (data?.token?.access) {
        setToken(data.token.access);
        router.replace("/");
      return;
    } 

    } catch (err) {
      console.error("Login failed:", err.message);

    }
  }


  return (


    <div className="h-full flex flex-col items-center justify-center gap-15">
      <h1 className="text-white font-semibold text-3xl">Welcome, You are?</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-9 px-8 lg:px-0">
        <div className="flex flex-col w-full items-center gap-2">
          <label className="text-white text-sm self-start lg:mx-15 mx-1">Phone</label>
          <input
            type="text"
            {...register("phone_number")}
            className="bg-primaryDark outline-none h-12 w-full lg:w-[85%] rounded-lg text-white px-4"
            placeholder="Eg: 8897878945"
            maxLength={10}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              );
            }}
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm self-start lg:mx-[7.5%] mx-1">
              {errors.phone_number.message}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full items-center gap-2">
          <label className="text-white text-sm self-start lg:mx-15 mx-1">Name</label>
          <input
            type="text"
            {...register("name")} 
            className="bg-primaryDark outline-none h-12 w-full lg:w-[85%] rounded-lg text-white px-4"
            placeholder="Eg: john Mathe"

          />
          {errors.name && (
            <p className="text-red-500 text-sm self-start lg:mx-[7.5%] mx-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <button type="submit" className="text-black bg-white w-full lg:w-[85%] h-12 rounded-lg text-sm cursor-pointer">
          {isSubmitting?"Submitting..":"Continue"}
        </button>
      </form>
    </div>
  );
};

export default page;
