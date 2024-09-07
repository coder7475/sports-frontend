// A navbar with logo and necessary menu items (e.g. All Products, Manage Products, Cart, About Us)
import { FaCircle } from "react-icons/fa6";
import MyDropdownMenu from "./dropdown/MyDropdownMenu";
import Cart from "../cart/Cart";

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

          <Cart />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
