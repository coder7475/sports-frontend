import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark";
import ProductForm from "../ProductForm/ProductForm";
import { IProduct } from "@/interfaces/product.interface";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

import { TabSelectedProps } from "@/interfaces/manage.products";

const UpdateProduct = ({ tabSelected }: { tabSelected: TabSelectedProps }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IProduct>();

  const axios = useAxios();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkCookie = () => {
      const productId = document.cookie
        .split("; ")
        .find((row) => row.startsWith("ProductId="))
        ?.split("=")[1];
      console.log(productId);

      if (productId) {
        axios.get(`/products/${productId}`).then((res) => {
          if (res?.status === 200) {
            const product = res.data.data;
            Object.keys(product).forEach((key) => {
              setValue(key as keyof IProduct, product[key]);
            });
            setIsLoading(false);
          }
        });
      }
    };

    checkCookie();
  }, [axios, setValue, tabSelected]);

  const onSubmit = (data: IProduct) => {
    console.log("clicked");
    const productId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("ProductId="))
      ?.split("=")[1];
    console.log(productId);
    if (productId) {
      axios.patch(`/products/${productId}`, data).then((res) => {
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
