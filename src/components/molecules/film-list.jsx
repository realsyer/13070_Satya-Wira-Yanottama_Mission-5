import { useListFilm } from "@/lib/hook/film"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import LeftArrowSplide from "../atoms/splide/left";
import RightArrowSplide from "../atoms/splide/right";
import Card from "../atoms/card";

export default function ListFilms({
  title,
  ids
}) {
  const { data: films } = useListFilm({ ids })
  return (
    <div className="flex flex-col px-20 py-10 gap-8">
      <span className="font-bold text-white text-[32px] font-lato">{title}</span>

      <Splide
        options={{
          autoWidth: true,
          rewind: true,
          gap: '24px',
          perPage: 4,
          perMove: 1
        }}
        hasTrack={false}>
        <SplideTrack>
          {films.length > 0 && films.map((data, index) => (
            <SplideSlide key={index}>
              <Card data={data} />
            </SplideSlide>
          ))}
        </SplideTrack>


        <div className="splide__arrows">
          <LeftArrowSplide className={"top-40"} />
          <RightArrowSplide className={"top-40"} />
        </div>
      </Splide>
    </div>
  )
}