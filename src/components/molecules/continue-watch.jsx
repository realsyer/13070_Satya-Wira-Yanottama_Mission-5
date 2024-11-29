import { useContinueWatch } from "@/lib/hook/film";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import WideCard from "../atoms/wide-card";
// or only core styles
import '@splidejs/react-splide/css/core';
import LeftArrowSplide from "../atoms/splide/left";
import RightArrowSplide from "../atoms/splide/right";

export default function ContinueWatch() {
  const listContinue = useContinueWatch();
  return (
    <div className="flex flex-col gap-8 py-10 px-20">
      <span className="text-white font-bold text-[32px]">Melanjutkan Tonton Film</span>

      <Splide options={{
        autoWidth: true,
        gap: '24px',
        perPage: 4,
        perMove: 1
      }} hasTrack={false} aria-label="...">
        <SplideTrack>
          { listContinue.length > 0 && listContinue.map((data, index) => (
            <SplideSlide key={index}>
              <WideCard data={data} />
            </SplideSlide>
          ))}
        </SplideTrack>


        <div className="splide__arrows">
          <LeftArrowSplide />
          <RightArrowSplide />
        </div>
      </Splide>
    </div>
  )
}