// src/controllers/authController.js
import {  useMutation, useQueryClient,useQuery } from "@tanstack/react-query";
import { axiosPublic,axiosPrivate } from "@/lib/axios";
import { API_URL } from "@/constant/apiURLs";


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
      if (data.success) {
        queryClient.setQueryData(["auth"], data.user); // cache user
      }
    },
  });
};

// ✅ Logout mutation
export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const res = await axiosPublic.post(API_URL.ADMINLOGOUT_URL);
      return res.data;
    },
    onSuccess: () => {
      queryClient.removeQueries(["auth"]);
    },
  });
};

