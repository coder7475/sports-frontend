import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "@/hooks/useAxios";
import Toast from "@/utils/toast";

const Checkout = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const axios = useAxios();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    try {
      // Deduct stock logic here
      await axios.post("/orders", { userDetails, paymentMethod });

      if (paymentMethod === "cash") {
        Toast.fire({
          icon: "success",
          title: "Order placed successfully! Redirecting to home...",
        });
        navigate("/success");
      } else {
        // Redirect to Stripe payment page
        window.location.href = "/stripe-payment"; // Replace with actual Stripe payment URL
      }
    } catch (error) {
      console.error("Error placing order:", error);
      Toast.fire({
        icon: "error",
        title: "Failed to place order. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-card rounded-lg shadow-md max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border bg-card border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            value={userDetails.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border bg-card border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            value={userDetails.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-2 border bg-card border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            value={userDetails.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            className="w-full p-2 border bg-card border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            value={userDetails.address}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
              className="form-radio text-primary"
            />
            <span>Cash on Delivery</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="stripe"
              checked={paymentMethod === "stripe"}
              onChange={() => setPaymentMethod("stripe")}
              className="form-radio text-primary"
            />
            <span>Stripe</span>
          </label>
        </div>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-secondary text-black font-semibold hover:font-bold py-2 px-4 rounded-md hover:bg-primary transition duration-300"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
