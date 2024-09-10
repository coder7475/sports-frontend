import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark";
import ProductForm from "../ProductForm/ProductForm";
import { IProduct } from "@/interfaces/product.interface";
import useAxios from "@/hooks/useAxios";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();

  const axios = useAxios();

  const onSubmit = (data: IProduct) => {
    axios.post("/products", data).then((res) => {
      if (res?.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Product added successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Failed",
          text: "Product addition failed!",
          icon: "error",
        });
      }
    });
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

export default AddProduct;
