import { useHighlightFilm } from "@/lib/hook/film";
import { Button } from "../atoms/ui/button";
import { InfoIcon, VolumeOff } from "lucide-react";

export default function DashboardHero() {
  const { data: hero } = useHighlightFilm();
  return (
    <div className="h-[587px] relative w-full">
      <img src={hero.backdrop_path} className="w-full h-full object-cover absolute inset-0" alt={hero.name} />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark to-transparent flex flex-col px-20 pb-20 justify-end">
        <h2 className="font-bold text-5xl text-white">{ hero.name }</h2>
        <div className="w-full max-w-[48vw] mt-5">
          <p className="w-full line-clamp-1 md:line-clamp-3">{ hero.overview }</p>
        </div>

        <div className="w-full flex items-center justify-between mt-10">
          <div className="flex items-center gap-2.5">
            <Button className="py-2.5 px-[26px] font-bold font-lato" variant="primary">Mulai</Button>
            <Button className="py-2.5 px-[26px] font-bold font-lato">
              <InfoIcon/>
              <span>Selengkapnya</span>
            </Button>
            {
              hero.adult && (
                <div className="rounded-full border border-light-secondary p-2">18+</div>
              )
            }
          </div>

          <div className="rounded-full flex items-center justify-center w-11 h-11 aspect-square border border-light-secondary">
            <VolumeOff className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  )
}