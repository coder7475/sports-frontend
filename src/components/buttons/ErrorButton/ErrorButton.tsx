import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ErrorButton = () => {
  return (
    <NavLink to="/">
      <Button variant="link">Back Home</Button>
    </NavLink>
  );
};

export default ErrorButton;
