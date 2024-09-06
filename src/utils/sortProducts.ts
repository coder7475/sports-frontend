import { IProduct } from "@/interfaces/product.interface";

const sortProducts = (products: IProduct[]) => {
  return products
    .sort((a: { rating: number }, b: { rating: number }) => b.rating - a.rating)
    .slice(0, 6);
};

export default sortProducts;
