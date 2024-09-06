import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "@/hooks/useAxios";
import { IProduct } from "@/interfaces/product.interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Rating from "react-rating";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import Toast from "@/utils/toast";

const SingleProduct = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams<{ id: string }>();
  const axios = useAxios();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id, axios]);

  const handleAddToCart = async () => {
    if (!product) return;

    dispatch(addToCart(product));
    Toast.fire({
      icon: "success",
      title: "Product added to cart successfully!",
    });

    // Decrease product quantity in the backend using axios
    await axios
      .patch(`/products/${id}`, {
        quantity: product.quantity - 1,
      })
      .then((response) => {
        if (response.status !== 200) {
          Toast.fire({
            icon: "error",
            title: "Failed to update product information",
          });
        }
      });

    const response = await axios.get(`/products/${id}`);

    if (response.status === 200) {
      setProduct(response.data.data);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-fit rounded-lg"
            />
          </CardHeader>
          <CardContent className="space-y-4">
            <CardTitle className="text-3xl">{product.name}</CardTitle>
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold">
                ${product.price.toFixed(2)} USD
              </h4>
              <span className="text-sm">Stock: {product.quantity}</span>
            </div>
            <div>
              <span className="font-bold">Brand:</span> {product.brand}
            </div>
            <div>
              <span className="font-bold">Category:</span> {product.category}
            </div>
            <div className="flex items-center">
              <span className="font-bold mr-2 mb-2">Rating:</span>
              <Rating
                placeholderRating={product.rating}
                emptySymbol={
                  <img
                    src="/src/assets/Spark_black.png"
                    className="icon w-6 h-6"
                    alt="empty star"
                  />
                }
                placeholderSymbol={
                  <img
                    src="/src/assets/Spark.png"
                    className="icon w-6 h-6"
                    alt="placeholder"
                  />
                }
                fullSymbol={
                  <img
                    src="/src/assets/Spark.png"
                    className="icon w-6 h-6"
                    alt="full symbol"
                  />
                }
                readonly
              />
            </div>
            <CardDescription className="text-lg text-card-foreground">
              {product.description}
            </CardDescription>
            <Button
              variant="default"
              className="bg-card-foreground text-card hover:bg-primary hover:text-black w-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
