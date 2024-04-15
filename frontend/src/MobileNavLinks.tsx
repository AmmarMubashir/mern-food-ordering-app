import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogOut, UserRound } from "lucide-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-1">
      <Link
        to="/user-profile"
        className="flex items-center gap-2 text-gray-500 hover:text-orange-500 pl-2"
      >
        <UserRound /> <span className="pl-2">User Profile </span>
      </Link>
      <Button
        className="text-gray-500 hover:text-orange-500 flex gap-2 pl-2"
        variant="ghost"
        onClick={() => logout()}
      >
        <LogOut /> <span className="pl-2">Logout </span>
      </Button>
    </div>
  );
};

export default MobileNavLinks;
