import { Check, ChevronDown } from "lucide-react";
import PlayIcon from "../icons/play";
import Group from "./group";

export default function ContentHoverCard({
  data
}) {
  return (
    <div className="z-[60] select-none w-full h-full flex flex-col">
      <div className="relative w-full h-[255px]">
        <img src={data.backdrop_path} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col p-7 gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <PlayIcon />
            <div className="w-13 h-13 rounded-full border border-light-disabled p-3 flex items-center justify-center">
              <Check className="w-auto h-auto" />
            </div>
          </div>
          <div className="w-13 h-13 rounded-full border border-light-disabled p-3 flex items-center justify-center">
            <ChevronDown className="w-auto h-auto" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-info-background text-white px-3 py-1 rounded-full flex items-center justify-center">
            <span>{data.adult ? "18+" : "13+"}</span>
          </div>

          <span className="flex-auto text-white font-bold text-xl">
            {data.type === 'series' ? '16 Episode' : '2j 33m'}
          </span>
        </div>

        {data.genres && data.genres.length > 0 && (
          <div className="flex items-center justify-between">
            {data.genres.slice(0, 3).map((genre, index) => (
              <Group key={index}>
                <span className="text-white font-semibold font-lato text-lg">{genre.name}</span>
                { index + 1 < 3 && (
                  <div className="w-2 h-2 rounded-full bg-light-secondary">

                  </div>
                )}
              </Group>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}