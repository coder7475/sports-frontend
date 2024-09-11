import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { IProduct } from "@/interfaces/product.interface";

const MyCard = ({ product }: { product: IProduct }) => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-2xl ${
            i <= rating ? "text-primary" : "text-card-foreground"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <Card>
      <CardHeader>
        <img src={product?.image} alt="iam" className="rounded-lg h-60" />
      </CardHeader>
      <CardContent>
        <CardTitle>{product?.name}</CardTitle>

        <h4>
          {" "}
          <span className="font-bold">Brand:</span> {product?.brand}
        </h4>

        <h4>
          {" "}
          <span className="font-bold">Category:</span> {product?.category}
        </h4>

        <h4>
          {" "}
          <span className="font-bold">Price:</span> {product?.price} USD
        </h4>

        <h4>
          {" "}
          <span className="font-bold">Stock Quantity:</span> {product?.quantity}
        </h4>

        <h4>
          {" "}
          <span className="font-bold">Rating:</span>{" "}
          {renderStars(product?.rating)}
        </h4>

        <CardDescription className="my-2 text-card-foreground">
          {product?.description.slice(0, 50)}
        </CardDescription>

        <Button
          variant="default"
          className="bg-card-foreground text-card hover:bg-primary hover:text-black mt-2"
          onClick={() => navigate(`/single-product/${product?._id}`)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default MyCard;
