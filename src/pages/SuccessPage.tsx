import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto mt-16 text-center">
      <h1 className="text-4xl font-bold mb-6">Transaction Successful!</h1>
      <p className="text-xl mb-8">Thank you for your purchase.</p>
      <div className="flex justify-center">
        <Button
          onClick={handleGoHome}
          className="bg-secondary text-black font-semibold hover:font-bold py-2 px-4 rounded-md hover:bg-primary transition duration-300"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
