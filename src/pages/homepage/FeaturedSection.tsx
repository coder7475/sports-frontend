import MyCard from "@/components/cards/MyCard";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

const FeaturedSection = () => {
  const axios = useAxios();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res?.data?.data))
      .catch((err) => console.log(err));
  }, [axios]);

  console.log(products);

  return (
    <div>
      <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
        Featured Goods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    </div>
  );
};

export default FeaturedSection;
