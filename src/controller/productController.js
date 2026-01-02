import { API_URL } from "@/constant/apiURLs";
import { axiosPrivate } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";


export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"], // cache key
    queryFn: async () => {
      try {
        const res = await axiosPrivate.get(API_URL.PRODUCTS_URL);
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