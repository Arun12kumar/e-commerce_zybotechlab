import { API_URL } from "@/constant/apiURLs";
import { axiosPrivate, axiosPublic } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";


export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"], // cache key
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(API_URL.PRODUCTS_URL);
        console.log(res.data,'test')
        return res.data; 
      } catch (err) {
      
        const message =
          err.response?.data?.message || err.message || "Failed to fetch Products";
        throw new Error(message); 
      }
    },
    retry: 1, 
  });
};

export const useGetAllOrders = () => {
  return useQuery({
    queryKey: ["orders"], // cache key
    queryFn: async () => {
      try {
        const res = await axiosPrivate.get(API_URL.MY_ORDERS);
        console.log(res.data,'test')
        return res.data; 
      } catch (err) {
      
        const message =
          err.response?.data?.message || err.message || "Failed to fetch orders";
        throw new Error(message); 
      }
    },
    retry: 1, 
  });
};