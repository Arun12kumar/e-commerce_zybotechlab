"use client";


import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const token = useAuthStore((state) => state.token);
  console.log(token,"protect")
  const router = useRouter();

  useEffect(() => {
    if (token===null) {
      router.replace("/login");
    }
  }, [token, router]);

  // Prevent rendering protected UI before redirect
  if (token===null) return null;

  return children;
}
