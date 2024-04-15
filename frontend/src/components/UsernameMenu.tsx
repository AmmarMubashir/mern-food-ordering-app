import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { LogOut, UserRound } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center rounded-full font-bold hover:text-orange-500 gap-2">
        <img src={user?.picture} className="h-[50px] w-[50px] rounded-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-[60px]">
        <DropdownMenuItem className="flex gap-2">
          <img src={user?.picture} className="h-[40px] w-[40px] rounded-full" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="mt-[10px]">
          <Link
            to="/user-profile"
            className="flex items-center gap-2 text-gray-500 hover:text-orange-500 pl-2"
          >
            <UserRound /> <span className="pl-2">User Profile </span>
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="-mt-[7px]">
          <Button
            className="text-gray-500 hover:text-orange-500 flex gap-2 pl-2"
            variant="ghost"
            onClick={() => logout()}
          >
            <LogOut /> <span className="pl-2">Logout </span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
