import { HoverCardPortal } from "@radix-ui/react-hover-card";
import Star from "../icons/star";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import ContentHoverCard from "./hover-card-content";

export default function WideCard({
  data
}) {
  return (
    <div className="relative">
      <HoverCard asChild>
        <HoverCardTrigger asChild>
          <div className="relative w-[302px] h-[162px] rounded-md overflow-hidden">
            <img src={data.backdrop_path} className="absolute z-0 inset-0 object-center object-cover" alt="" />
            <div className="absolute inset-0 pb-3 px-4 bg-dark/30 z-10 flex items-end justify-between">
              <span className="text-white text-lg line-clamp-1">{data.name}</span>
              <div className="flex items-center">
                <Star size={16} />
                <span>
                  {(data.vote_average / 2).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent align="center" sideOffset={parseInt(0 - (365 - (365 / 3)))} className="w-[408px] h-[460px] p-0 rounded-lg overflow-hidden border-none transition-all">
            <ContentHoverCard data={data} />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </div>
  )
}