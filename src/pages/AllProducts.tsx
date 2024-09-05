import MyCard from "@/components/cards/MyCard";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import useAxios from "@/hooks/useAxios";
import { IProduct } from "@/interfaces/product.interface";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const axios = useAxios();

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res?.data?.data))
      .catch((err) => console.log(err));
  }, [axios]);

  return (
    <main className="font-helve container mx-auto">
      <section className="max-w-[1280px] mx-auto mt-3">
        <NavBar />
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
          All Products
        </h2>
        <div className="mb-8">
          <div className="flex flex-wrap justify-center w-full items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 border rounded w-full lg:w-1/3 bg-card"
              onChange={(e) => {
                // search logic
                axios
                  .get(`/products?name=${e.target.value}`)
                  .then((res) => setProducts(res?.data?.data))
                  .catch((err) => console.log(err));
              }}
            />
            <select
              className="p-2 border rounded bg-card"
              onChange={(e) => {
                // category filter logic
                axios
                  .get(`/products?category=${e.target.value}`)
                  .then((res) => setProducts(res?.data?.data))
                  .catch((err) => console.log(err));
              }}
            >
              <option value="">All Categories</option>
              <option value="Ball Sports">Ball Sports</option>
              <option value="Basketball">Basketball</option>
              <option value="Football">Football</option>
              <option value="Tennis">Tennis</option>
              <option value="Golf">Golf</option>
              <option value="Racket Sports">Racket Sports</option>
              <option value="Cycling">Cycling</option>
              <option value="Swimming">Swimming</option>
              <option value="Footwear">Footwear</option>
            </select>
            <select
              className="p-2 border rounded bg-card"
              onChange={(e) => {
                // price filter
                axios
                  .get(`/products?price=${e.target.value}`)
                  .then((res) => setProducts(res?.data?.data))
                  .catch((err) => console.log(err));
              }}
            >
              <option value="">All Prices</option>
              <option value="0-50">$ 0 - $ 50</option>
              <option value="51-100">$ 51 - $ 100</option>
              <option value="101-200">$ 101 - $ 200</option>
              <option value="201+">$ 201+</option>
            </select>
            <select
              className="p-2 border rounded bg-card"
              onChange={(e) => {
                // brand filter
                axios
                  .get(`/products?brand=${e.target.value}`)
                  .then((res) => setProducts(res?.data?.data))
                  .catch((err) => console.log(err));
              }}
            >
              <option value="">All Brands</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              <option value="puma">Puma</option>
              <option value="wilson">Wilson</option>
              <option value="callaway">Callaway</option>
              <option value="spalding">Spalding</option>
              <option value="rawlings">Rawlings</option>
              <option value="liforme">Liforme</option>
              <option value="giro">Giro</option>
              <option value="bowflex">Bowflex</option>
              <option value="speedo">Speedo</option>
            </select>
            <select
              className="p-2 border rounded bg-card"
              onChange={(e) => {
                // Implement rating filter
                axios
                  .get(`/products?rating=${e.target.value}`)
                  .then((res) => setProducts(res?.data?.data))
                  .catch((err) => console.log(err));
              }}
            >
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars & Up</option>
              <option value="3">3 Stars & Up</option>
              <option value="2">2 Stars & Up</option>
              <option value="1">1 Star & Up</option>
            </select>
            <select
              className="p-2 border rounded bg-card"
              onChange={(e) => {
                // Implement price sorting
                console.log(e.target.value);
              }}
            >
              <option value="">Sort by Price</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((product: IProduct) => {
            return <MyCard key={nanoid()} product={product} />;
          })}
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <Footer />
      </section>
    </main>
  );
};

export default AllProducts;
