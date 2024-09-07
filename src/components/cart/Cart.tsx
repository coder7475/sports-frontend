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
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <CartIcon />
          <span className="ml-2">{cartItems.length}</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Your Cart</AlertDialogTitle>
          <AlertDialogDescription>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cartItems.map((item: CartItem) => (
                  <li key={item._id}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            )}
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
