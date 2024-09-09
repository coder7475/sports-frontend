import { useState, useEffect } from "react";
import { IProduct } from "@/interfaces/product.interface";
import useAxios from "@/hooks/useAxios";

const ListProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const axios = useAxios();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ data: IProduct[] }>("/products");
        setProducts(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [axios]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold mb-2">Price: ${product.price.toFixed(2)}</p>
            <p className="mb-2">Category: {product.category}</p>
            <p className="mb-2">Stock: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
