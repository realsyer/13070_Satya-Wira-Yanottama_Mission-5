import { HoverCardPortal } from "@radix-ui/react-hover-card";
import Star from "../icons/star";
import ContentHoverCard from "./hover-card-content";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export default function Card({
  data
}) {
  return (
    <div className="relative">
      <HoverCard asChild>
        <HoverCardTrigger asChild>
          <div className="relative w-[234px] h-[365px]">
            <img src={data.poster_path} className="absolute z-0 rounded-md overflow-hidden inset-0 object-center object-cover" alt="" />
          </div>
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent align="center" sideOffset={parseInt(0 - (365 - (365/3)))} className="w-[408px] h-[460px] p-0 rounded-lg overflow-hidden border-none transition-all">
            <ContentHoverCard data={data} />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </div>
  )
}