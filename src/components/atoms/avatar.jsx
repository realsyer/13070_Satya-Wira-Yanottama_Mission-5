import { cn } from "@/lib/utils"
import defaultImage from "../../assets/avatar.png"
export default function Avatar({ className }) {
  return (
    <img src={defaultImage} className={cn("w-10 h-10 rounded-full overflow-hidden", className)} />
  )
}