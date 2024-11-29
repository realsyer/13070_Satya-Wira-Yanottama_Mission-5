import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function RightArrowSplide({ className }) {
  return (
    <button className={cn("splide__arrow splide__arrow--next absolute -right-[22px] top-[59px] p-2.5 rounded-full bg-dark text-white border-other-extra", className)}>
      <ArrowRight />
    </button>
  )
}