"use client";

import { useLogin } from "@/controller/authController";
import { useAuthStore } from "@/store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createContext, useContext,  } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const router = useRouter();
  const queryClient = useQueryClient();

  const loginMutation = useLogin();

const { token, setToken, logout: storeLogout } = useAuthStore();

  const login = async (credentials) => {
    const data = await loginMutation.mutateAsync(credentials);
 
    if (data?.token) {
      setToken(data.token.access);
      queryClient.setQueryData(["token"], data.token);
    }
    return data;
  };

  // Manual logout
  const logout = async () => {
    storeLogout();
    queryClient.clear();
    router.replace("/login");
  };

  const values={
    token,
    login,
    logout,
    isLoggingIn: loginMutation.isLoading,
    isLoggingError: loginMutation.error,
  }
  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within an AuthProvider")
    return context;
}
