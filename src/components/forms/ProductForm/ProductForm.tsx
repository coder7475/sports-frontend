import { useForm } from "react-hook-form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Swal from "sweetalert2";

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
    // Handle form submission
    // create a new product
    fetch("http://localhost:5003/api/v1/products", {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto px-4 rounded-lg mt-2 space-y-6 bg-card w-full"
    >
      <div className="flex flex-col w-full lg:flex-row gap-4 px-8 pt-8">
        <div className="w-full">
          <label
            htmlFor="name"
            className="block text-start text-lg font-semibold text-card-foreground"
          >
            Product Name{" "}
            <input
              type="text"
              id="name"
              {...register("name", { required: "Product Name is required" })}
              className="mt-1 text-black px-1 py-1 block w-full rounded-md bg-card-foreground border-primary focus:border-primary"
            />
          </label>
          {errors.name && (
            <Alert variant="destructive">
              <AlertDescription>{errors.name.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="w-full">
          <label
            htmlFor="brand"
            className="block text-start text-lg font-semibold text-card-foreground"
          >
            Brand{" "}
            <input
              type="text"
              id="brand"
              {...register("brand", { required: "Brand is required" })}
              className="mt-1 text-black px-1 py-1 block w-full rounded-md bg-card-foreground border-primary focus:border-primary"
            />
          </label>
          {errors.brand && (
            <Alert variant="destructive">
              <AlertDescription>{errors.brand.message}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full lg:flex-row gap-4 px-8 pt-2">
        <div className="w-full">
          <label
            htmlFor="quantity"
            className="block text-start text-lg font-semibold text-card-foreground"
          >
            Quantity{" "}
            <input
              type="number"
              id="quantity"
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 0, message: "Quantity must be positive" },
              })}
              className="mt-1 text-black px-1 py-1 block w-full rounded-md bg-card-foreground border-primary focus:border-primary"
            />
            {errors.quantity && (
              <Alert variant="destructive">
                <AlertDescription>{errors.quantity.message}</AlertDescription>
              </Alert>
            )}
          </label>
        </div>
        <div className="w-full">
          <label
            htmlFor="category"
            className="block text-start text-lg font-semibold text-card-foreground px-1"
          >
            Category{" "}
            <select
              id="category"
              {...register("category", { required: "Category is required" })}
              className="mt-1 text-black p-2 w-full rounded-md bg-card-foreground border-primary focus:border-primary"
            >
              <option value="" disabled selected>
                Select a Category
              </option>
              <optgroup label="Apparel and Footwear">
                <option value="sportswear">Sportswear</option>
                <option value="footwear">Footwear</option>
                <option value="protective-gear">Protective Gear</option>
              </optgroup>
              <optgroup label="Equipment and Gear">
                <option value="balls">Balls</option>
                <option value="rackets-bats">Rackets and Bats</option>
                <option value="clubs-sticks">Clubs and Sticks</option>
                <option value="nets-goals">Nets and Goals</option>
              </optgroup>
              <optgroup label="Fitness and Exercise Equipment">
                <option value="cardio-machines">Cardio Machines</option>
                <option value="strength-training">
                  Strength Training Equipment
                </option>
                <option value="yoga-pilates">Yoga and Pilates Gear</option>
              </optgroup>
              <optgroup label="Outdoor and Adventure Gear">
                <option value="camping-equipment">Camping Equipment</option>
                <option value="water-sports">Water Sports Equipment</option>
                <option value="climbing-gear">Climbing Gear</option>
              </optgroup>
              <optgroup label="Accessories">
                <option value="sports-bags">Sports Bags and Backpacks</option>
                <option value="water-bottles">
                  Water Bottles and Hydration Packs
                </option>
                <option value="fitness-trackers">
                  Fitness Trackers and Smartwatches
                </option>
              </optgroup>
              <optgroup label="Sports Nutrition and Wellness">
                <option value="supplements">Supplements</option>
                <option value="hydration-products">Hydration Products</option>
                <option value="health-monitoring">
                  Health Monitoring Devices
                </option>
              </optgroup>
            </select>
            {errors.category && (
              <Alert variant="destructive">
                <AlertDescription>{errors.category.message}</AlertDescription>
              </Alert>
            )}
          </label>
        </div>
      </div>

      <div className="flex flex-col w-full lg:flex-row gap-4 px-8 pt-2">
        <div className="w-full">
          <label
            htmlFor="rating"
            className="block text-start text-lg font-semibold text-card-foreground"
          >
            Rating{" "}
            <input
              type="number"
              id="rating"
              {...register("rating", {
                required: "Rating is required",
                min: { value: 0, message: "Rating must be between 0 and 5" },
                max: { value: 5, message: "Rating must be between 0 and 5" },
              })}
              className="mt-1 text-black px-1 py-1 block w-full rounded-md bg-card-foreground border-primary focus:border-primary"
            />
            {errors.rating && (
              <Alert variant="destructive">
                <AlertDescription>{errors.rating.message}</AlertDescription>
              </Alert>
            )}
          </label>
        </div>

        <div className="w-full">
          <label
            htmlFor="price"
            className="block text-start text-lg font-semibold text-card-foreground"
          >
            Price{" "}
            <input
              type="number"
              id="price"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price must be positive" },
              })}
              className="mt-1 text-black px-1 py-1 block w-full rounded-md bg-card-foreground border-primary focus:border-primary"
            />
            {errors.price && (
              <Alert variant="destructive">
                <AlertDescription>{errors.price.message}</AlertDescription>
              </Alert>
            )}
          </label>
        </div>
      </div>

      <div className="w-full px-8 pt-2">
        <label
          htmlFor="image"
          className="block text-start text-lg font-semibold text-card-foreground"
        >
          Image URL{" "}
          <input
            type="text"
            id="image"
            {...register("image", { required: "Image URL is required" })}
            className="mt-1 text-black px-1 py-1 block w-full rounded-md bg-card-foreground border-primary focus:border-primary"
          />
          {errors.image && (
            <Alert variant="destructive">
              <AlertDescription>{errors.image.message}</AlertDescription>
            </Alert>
          )}
        </label>
      </div>

      <div className="w-full px-8 pt-2">
        <label
          htmlFor="description"
          className="block text-start text-lg font-semibold text-card-foreground"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          className="mt-1 text-black px-1 py-1 block w-full rounded-md bg-card-foreground border-primary focus:border-primary"
          rows={3}
        ></textarea>
        {errors.description && (
          <Alert variant="destructive">
            <AlertDescription>{errors.description.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="w-full px-8 pt-2 pb-12">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-semibold text-card bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:font-black"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
