import { API_URL } from "@/constant/apiURLs";
import { axiosPrivate, axiosPublic } from "@/libs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"], // cache key
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(API_URL.PRODUCTS_URL);
        
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

export const  usePostOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (order) => {
      try {
        const res = await axiosPrivate.post(API_URL.ORDER_SUCCESS, order, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        return res.data; // { success, user, message }

      } catch (err) {
      
        const message =
          err.response?.data?.message || err.message || "Failed to order product";
        throw new Error(message); 
      }
    },
    onSuccess: (data) => {
      console.log(data,"order book")
      if (data.success) {
        queryClient.setQueryData(["orderbook"], data);
      }
    },
  });
};