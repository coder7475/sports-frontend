import { useState, useEffect } from "react";
import { IProduct } from "@/interfaces/product.interface";
import useAxios from "@/hooks/useAxios";
import { Button } from "@/components/ui/button";

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

  if (loading) return <div className="text-base">Loading...</div>;
  if (error) return <div className="text-base">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="min-w-full bg-background border border-input text-base">
        <thead>
          <tr>
            <th className="py-2 px-3 border-b">Image</th>
            <th className="py-2 px-3 border-b">Name</th>
            <th className="py-2 px-3 border-b">Price</th>
            <th className="py-2 px-3 border-b">Category</th>
            <th className="py-2 px-3 border-b">Stock</th>
            <th className="py-2 px-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td className="py-2 px-3 border-b">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="py-2 px-3 border-b">{product.name}</td>
              <td className="py-2 px-3 border-b">
                ${product.price.toFixed(2)}
              </td>
              <td className="py-2 px-3 border-b">{product.category}</td>
              <td className="py-2 px-3 border-b">{product.quantity}</td>
              <td className="py-2 px-3 border-b">
                <Button variant="outline" size="sm" className="mr-2">
                  Update
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;
