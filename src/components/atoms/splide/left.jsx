import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export default function LeftArrowSplide({ className }) {
  return (
    <button className={cn("splide__arrow splide__arrow--prev absolute -left-[22px] top-[59px] p-2.5 rounded-full bg-dark text-white border-other-extra", className)}>
      <ArrowLeft />
    </button>
  )
}