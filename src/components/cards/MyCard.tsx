import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { IProduct } from "@/interfaces/product.interface";

const MyCard = ({ product }: { product: IProduct }) => {
  const navigate = useNavigate();
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
          <span className="font-bold">
            <Rating
              placeholderRating={product?.rating}
              emptySymbol={
                <img
                  src="/src/assets/Spark_black.png"
                  className="icon w-12 h-12"
                  alt="empty star"
                />
              }
              placeholderSymbol={
                <img
                  src="/src/assets/Spark.png"
                  className="icon w-12 h-12"
                  alt="placeholder"
                />
              }
              fullSymbol={
                <img
                  src="/src/assets/Spark.png"
                  className="icon w-12 h-12"
                  alt="full symbol"
                />
              }
              readonly
            />
          </span>
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
