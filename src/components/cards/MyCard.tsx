import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
const MyCard = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <img src="/src/assets/fdgdfg.jpeg" alt="iam" className="rounded-lg" />
      </CardHeader>
      <CardContent>
        <CardTitle>Good 1</CardTitle>

        <h4>
          {" "}
          <span className="font-bold">Brand:</span> Nike
        </h4>

        <h4>
          {" "}
          <span className="font-bold">Category:</span> Soccer
        </h4>

        <h4>
          {" "}
          <span className="font-bold">Price:</span> 35 USD
        </h4>

        <h4>
          {" "}
          <span className="font-bold">Stock Quantity:</span> 12
        </h4>

        <h4>
          {" "}
          <span className="font-bold">Rating:</span> 4
        </h4>

        <CardDescription className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          quod repellendus eaque magni sapiente. Ab non cupiditate dignissimos
          ad, eos quod suscipit enim rerum architecto, iusto nulla voluptate
          doloremque nostrum?
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
