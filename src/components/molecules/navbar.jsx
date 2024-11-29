import { ChevronDown, LogOut, Star, User } from "lucide-react";
import Avatar from "../atoms/avatar";
import Logo from "../atoms/logo";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../atoms/ui/dropdown";

export default function Navbar() {
  return (
    <div className="flex sticky top-0 z-50 bg-dark inset-x-0 items-center justify-between h-14 md:h-[94px] px-5 py-1.5 md:px-20 md:py-[25px] ">
      <div className="flex items-center gap-3 lg:gap-20">
        <Logo className={"h-11"} />
        <span className="font-medium text-lg font-lato text-white">Series</span>
        <span className="font-medium text-lg font-lato text-white">Film</span>
        <span className="font-medium text-lg font-lato text-white">Daftar Saya</span>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="border-none focus-within:ring-0 focus-within:outline-none">
            <div className="flex items-center gap-2">
              <Avatar />
              <ChevronDown className="w-7 h-7" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 border-other-extra bg-dark">
            <DropdownMenuItem>
              <User />
              Profil Saya
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star />
              Ubah Premium
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut />
              Keluar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}