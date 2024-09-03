import MyCard from "@/components/cards/MyCard";
import useAxios from "@/hooks/useAxios";
import { IProduct } from "@/interfaces/product.interface";
import sortProducts from "@/utils/sortProducts";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const FeaturedSection = () => {
  const axios = useAxios();
  const [products, setProducts] = useState<IProduct[]>([]);
  
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res?.data?.data))
      .catch((err) => console.log(err));
  }, [axios]);

  const featuredProducts = sortProducts(products);

  return (
    <div>
      <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
        Featured Goods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {featuredProducts.map((product: IProduct) => {
          return <MyCard key={nanoid()} product={product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedSection;
