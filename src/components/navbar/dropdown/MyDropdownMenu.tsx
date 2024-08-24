import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuPortal,
  // DropdownMenuSeparator,
  DropdownMenuShortcut,
  // DropdownMenuSub,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="font-black">
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-card text-card-foreground">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator />MyDropdownMenu */}
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
            <span>All Products</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <CreditCard className="mr-2 h-4 w-4" /> */}
            <span>Manage Products</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <Settings className="mr-2 h-4 w-4" /> */}
            <span>About Us</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
