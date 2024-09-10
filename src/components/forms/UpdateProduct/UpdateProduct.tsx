import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark";
import ProductForm from "../ProductForm/ProductForm";
import { IProduct } from "@/interfaces/product.interface";
import useAxios from "@/hooks/useAxios";
import { useEffect } from "react";

const UpdateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IProduct>();

  const axios = useAxios();

  useEffect(() => {
    const productId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("ProductId="))
      ?.split("=")[1];

    if (productId) {
      axios.get(`/products/${productId}`).then((res) => {
        if (res?.status === 200) {
          const product = res.data.data;
          Object.keys(product).forEach((key) => {
            setValue(key as keyof IProduct, product[key]);
          });
        }
      });
    }
  }, [axios, setValue]);

  const onSubmit = (data: IProduct) => {
    const productId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("ProductId="))
      ?.split("=")[1];

    if (productId) {
      axios.put(`/products/${productId}`, data).then((res) => {
        if (res?.status === 200) {
          Swal.fire({
            title: "Success",
            text: "Product updated successfully!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Failed",
            text: "Product update failed!",
            icon: "error",
          });
        }
      });
    }
  };

  return (
    <ProductForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

export default UpdateProduct;
