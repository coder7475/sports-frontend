import { Alert, AlertDescription } from "@/components/ui/alert";
import { UseFormRegister, FieldErrors, SubmitHandler } from "react-hook-form";
import { IProduct } from "@/interfaces/product.interface";

interface ProductFormProps {
  register: UseFormRegister<IProduct>;
  handleSubmit: (
    onSubmit: SubmitHandler<IProduct>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: SubmitHandler<IProduct>;
  errors: FieldErrors<IProduct>;
}

const ProductForm: React.FC<ProductFormProps> = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
}) => {
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
            Product Name
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Product Name is required",
              })}
              className="mt-1 text-black px-3 py-2 block w-full rounded-md bg-card-foreground border-primary focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>
          {errors.name && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.name.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="w-full">
          <label
            htmlFor="brand"
            className="block text-start text-lg font-semibold text-card-foreground"
          >
            Brand
            <input
              type="text"
              id="brand"
              {...register("brand", {
                required: "Brand is required",
              })}
              className="mt-1 text-black px-3 py-2 block w-full rounded-md bg-card-foreground border-primary focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>
          {errors.brand && (
            <Alert variant="destructive" className="mt-2">
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
            Quantity
            <input
              type="number"
              id="quantity"
              {...register("quantity", {
                required: "Quantity is required",
                min: {
                  value: 0,
                  message: "Quantity must be positive",
                },
              })}
              className="mt-1 text-black px-3 py-2 block w-full rounded-md bg-card-foreground border-primary focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>
          {errors.quantity && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.quantity.message}</AlertDescription>
            </Alert>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="category"
            className="block text-start text-lg font-semibold text-card-foreground"
          >
            Category
            <select
              id="category"
              {...register("category", {
                required: "Category is required",
              })}
              className="mt-1 text-black px-3 py-2 block w-full rounded-md bg-card-foreground border-primary focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
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
          </label>
          {errors.category && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.category.message}</AlertDescription>
            </Alert>
          )}
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
                min: {
                  value: 0,
                  message: "Rating must be between 0 and 5",
                },
                max: {
                  value: 5,
                  message: "Rating must be between 0 and 5",
                },
              })}
              className="mt-1 text-black px-3 py-2 block w-full rounded-md bg-card-foreground border-primary focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>
          {errors.rating && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.rating.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="w-full">
          <label
            htmlFor="price"
            className="block text-start text-lg font-semibold text-card-foreground"
          >
            Price
            <input
              type="number"
              id="price"
              {...register("price", {
                required: "Price is required",
                min: {
                  value: 0,
                  message: "Price must be positive",
                },
              })}
              className="mt-1 text-black px-3 py-2 block w-full rounded-md bg-card-foreground border-primary focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>
          {errors.price && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.price.message}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      <div className="w-full px-8 pt-2">
        <label
          htmlFor="image"
          className="block text-start text-lg font-semibold text-card-foreground"
        >
          Image URL
          <input
            type="text"
            id="image"
            {...register("image", {
              required: "Image URL is required",
            })}
            className="mt-1 text-black px-3 py-2 block w-full rounded-md bg-card-foreground border-primary focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </label>
        {errors.image && (
          <Alert variant="destructive" className="mt-2">
            <AlertDescription>{errors.image.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="w-full px-8 pt-2">
        <label
          htmlFor="description"
          className="block text-start text-lg font-semibold text-card-foreground"
        >
          Description
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1 text-black px-3 py-2 block w-full rounded-md bg-card-foreground border-primary focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            rows={3}
          ></textarea>
        </label>
        {errors.description && (
          <Alert variant="destructive" className="mt-2">
            <AlertDescription>{errors.description.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="w-full px-8 pt-2 pb-12">
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-card bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:font-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
