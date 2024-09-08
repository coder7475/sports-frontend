import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import CartIcon from "../ui/CartIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItem } from "@/redux/cartSlice";

const Cart = () => {
  // fetch cart from redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // Calculate total price and VAT
  const totalPrice = cartItems.reduce(
    (total: number, item: CartItem) => total + item.price * item.bought,
    0
  );
  const vat = totalPrice * 0.15;
  const totalWithVAT = totalPrice + vat;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <CartIcon />
          <span className="ml-2">{cartItems.length}</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="bg-card p-4 rounded-lg">
          <AlertDialogTitle className="text-xl font-medium">
            Your Cart
          </AlertDialogTitle>
          <AlertDialogDescription className="text-card-foreground">
            {cartItems.length === 0 ? (
              <p className="text-red-500 font-bold text-xl">
                Your cart is empty.
              </p>
            ) : (
              <ul>
                {cartItems.map((item: CartItem) => (
                  <li key={item._id} className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 mr-4 my-2 rounded-lg"
                    />
                    <div>
                      <p>
                        {item.name} - ${item.price} x {item.bought}
                      </p>
                      <p className="text-sm text-gray-500">
                        Brand: {item.brand}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 font-bold">
              Total Price (including 15% VAT):{" "}
              <span className="text-primary">${totalWithVAT.toFixed(2)}</span>
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          {cartItems.length > 0 && (
            <AlertDialogAction>Checkout</AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Cart;
