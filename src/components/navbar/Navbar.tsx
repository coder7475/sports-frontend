// A navbar with logo and necessary menu items (e.g. All Products, Manage Products, Cart, About Us)
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center text-base">
      <h2 className="text-3xl font-bold tracking-wider">
        <a href="/">
          Accel<span className="text-primary">P</span>ro
        </a>
      </h2>
      <ul className="flex justify-center gap-20 items-center text-[16px]">
        <li className="hover:font-bold">
          <a href="/">Home</a>
        </li>
        <li className="hover:font-bold">
          <a href="/">All Products</a>
        </li>
        <li className="hover:font-bold">
          <a href="/manage-products">Manage Products</a>
        </li>
        <li className="hover:font-bold">
          <a href="/about">About Us</a>
        </li>
      </ul>
      <Button>
        <CartIcon />
      </Button>
    </nav>
  );
};

const CartIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NavBar;
