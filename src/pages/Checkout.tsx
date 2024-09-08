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
      // Assuming you have a function to handle stock deduction
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
    <div className="container">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="user-details">
        <h2>User Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={userDetails.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={userDetails.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="payment-methods">
        <h2>Payment Methods</h2>
        <label>
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
          />
          Cash on Delivery
        </label>
        <label>
          <input
            type="radio"
            value="stripe"
            checked={paymentMethod === "stripe"}
            onChange={() => setPaymentMethod("stripe")}
          />
          Stripe
        </label>
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
