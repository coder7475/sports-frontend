import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MyDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="font-black">
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card text-card-foreground">
        <DropdownMenuGroup>
          <a className="hover:text-primary" href="/all-products">
            <DropdownMenuItem>All Products</DropdownMenuItem>
          </a>
          <a className="hover:text-primary" href="/manage-products">
            <DropdownMenuItem>Manage Products</DropdownMenuItem>
          </a>
          <a className="hover:text-primary" href="/about">
            <DropdownMenuItem>About Us</DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyDropdownMenu;
