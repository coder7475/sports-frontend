import { useForm } from "react-hook-form";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface IProduct {
  name: string;
  brand: string;
  quantity: number;
  category: string;
  rating: number;
  price: number;
  image: string;
  description: string;
}

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();

  const onSubmit = (data: IProduct) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-8 space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-base font-medium text-card-foreground"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.name && (
          <Alert variant="destructive">
            <AlertDescription>{errors.name.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div>
        <label
          htmlFor="brand"
          className="block text-base font-medium text-card-foreground"
        >
          Brand
        </label>
        <input
          type="text"
          id="brand"
          {...register("brand", { required: "Brand is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.brand && (
          <Alert variant="destructive">
            <AlertDescription>{errors.brand.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div>
        <label
          htmlFor="quantity"
          className="block text-base font-medium text-card-foreground"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          {...register("quantity", {
            required: "Quantity is required",
            min: { value: 0, message: "Quantity must be positive" },
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.quantity && (
          <Alert variant="destructive">
            <AlertDescription>{errors.quantity.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-base font-medium text-card-foreground"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          {...register("category", { required: "Category is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.category && (
          <Alert variant="destructive">
            <AlertDescription>{errors.category.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div>
        <label
          htmlFor="rating"
          className="block text-base font-medium text-card-foreground"
        >
          Rating
        </label>
        <input
          type="number"
          id="rating"
          {...register("rating", {
            required: "Rating is required",
            min: { value: 0, message: "Rating must be between 0 and 5" },
            max: { value: 5, message: "Rating must be between 0 and 5" },
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.rating && (
          <Alert variant="destructive">
            <AlertDescription>{errors.rating.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-base font-medium text-card-foreground"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          {...register("price", {
            required: "Price is required",
            min: { value: 0, message: "Price must be positive" },
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.price && (
          <Alert variant="destructive">
            <AlertDescription>{errors.price.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-base font-medium text-card-foreground"
        >
          Image URL
        </label>
        <input
          type="text"
          id="image"
          {...register("image", { required: "Image URL is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.image && (
          <Alert variant="destructive">
            <AlertDescription>{errors.image.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-base font-medium text-card-foreground"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={3}
        ></textarea>
        {errors.description && (
          <Alert variant="destructive">
            <AlertDescription>{errors.description.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-card bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
