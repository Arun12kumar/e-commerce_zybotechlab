
import {  useMutation, useQueryClient,useQuery } from "@tanstack/react-query";
import { API_URL } from "@/constant/apiURLs";
import { axiosPublic } from "@/libs/axios";


export const  useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials) => {
      try {
        const res = await axiosPublic.post(API_URL.VERIFY_USER, credentials, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        return res.data; // { success, user, message }

      } catch (err) {
      
        const message =
          err.response?.data?.message || err.message || "Failed to Verify";
        throw new Error(message); 
      }
    },
    onSuccess: (data) => {
      console.log(data,"authcontroller")
      if (data.success) {
        queryClient.setQueryData(["token"], data.token); // cache user
      }
    },
  });
};


export const  useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials) => {
      try {
        const res = await axiosPublic.post(API_URL.REGISTER_USER, credentials, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        return res.data; // { success, user, message }

      } catch (err) {
      
        const message =
          err.response?.data?.message || err.message || "Failed to Register";
        throw new Error(message); 
      }
    },
    onSuccess: (data) => {
      console.log(data,"register")
      if (data.success) {
        queryClient.setQueryData(["register"], data); // cache user
      }
    },
  });
};


