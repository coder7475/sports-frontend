import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
const MyCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <img
          src={product?.image}
          alt="iam"
          className="rounded-lg h-60"
          // height={"100%"}
          // width={"100%"}
        />
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
          <span className="font-bold">Rating:</span> {product?.rating}
        </h4>

        <CardDescription className="my-2 text-card-foreground">
          {product?.description.slice(0, 50)}
        </CardDescription>

        <Button
          variant="default"
          className="bg-card-foreground text-card hover:bg-card hover:text-black hover:font-bold hover:border-2 mt-2"
          onClick={() => navigate("/about")}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default MyCard;
