import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosUtil } from "../../../utils/axiosUtil";

const fetchProductsData = () => {
  return axiosUtil.get("/products");
};

const postProductData = (data) => {
  return axiosUtil.post("/products", data);
};

const fetchProductData = (id) => {
  return axiosUtil.get(`/products/${id}`);
};

const updateProductData = ({ _id: id, ...data }) => {
  console.log(data, "data");
  return axiosUtil.put(`/products/${id}`, data);
};

const deleteProductData = (id) => {
  return axiosUtil.delete(`/products/${id}`);
};

export const useQueryProductsData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsData,
    staleTime: 0,
    select: (data) => {
      return data.data;
    },
  });
};

export const useQueryProductData = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProductData(id),
    select: (data) => {
      return data.data;
    },
    enabled: !!id,
  });
};
export const useMutateProductsData = (props = {}) => {
  return useMutation({ mutationFn: postProductData, ...props });
};

export const useUpdateProductsData = (props = {}) => {
  return useMutation({ mutationFn: updateProductData, ...props });
};

export const useDeleteProductsData = (props = {}) => {
  return useMutation({ mutationFn: deleteProductData, ...props });
};
// export const useInvalidateProductsQuery = () =>{
//     queryClient.invalidateQueries("products")
// }
