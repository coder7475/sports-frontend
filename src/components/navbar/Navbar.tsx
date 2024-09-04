// A navbar with logo and necessary menu items (e.g. All Products, Manage Products, Cart, About Us)
import { Button } from "@/components/ui/button";
import { FaCircle } from "react-icons/fa6";
import { MyDropdownMenu } from "./dropdown/MyDropdownMenu";

const NavBar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <a
          className="flex title-font font-medium items-center text-white mb-0"
          href="/"
        >
          <FaCircle className="fill-primary text-xl" />
          <span className="ml-3 text-2xl md:text-3xl font-bold tracking-wider">
            Accel<span className="text-primary">P</span>ro
          </span>
        </a>
        <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-primary" href="/all-products">
            All Products
          </a>
          <a className="mr-5 hover:text-primary" href="/manage-products">
            Manage Products
          </a>
          <a className="mr-5 hover:text-primary" href="/about">
            About Us
          </a>
        </nav>
        <div className="flex items-center gap-2 justify-center p-1">
          <div className="md:hidden">
            <MyDropdownMenu />
          </div>
          <Button>
            <CartIcon />
          </Button>
        </div>
      </div>
    </header>
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
