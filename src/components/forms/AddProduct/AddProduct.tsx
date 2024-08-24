import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark";
import ProductForm from "../ProductForm/ProductForm";
import { IProduct } from "@/interfaces/product.interface";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();

  const onSubmit = (data: IProduct) => {
    // Handle form submission
    // create a new product
    fetch("http://188.245.99.15:5003/api/v1/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json?.success) {
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
    ></ProductForm>
  );
};

export default AddProduct;
