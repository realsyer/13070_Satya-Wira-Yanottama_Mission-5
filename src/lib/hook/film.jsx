import { listFilms } from "../data"

export const useHighlightFilm = () => {
  return useFindFilm({ query: 158258 })
}

export const useFindFilm = ({ query }) => {
  const data = listFilms.find((item) => item.id === query || item.name?.toLowerCase().includes(query))
  return { data }
}

export const useListFilm = ({ ids }) => {
  const results = [];
  ids.map((id) => {
    const { data } = useFindFilm({ query: id });

    if (data) {
      results.push(data)
    }
  })

  return { data: results }
}

export const useFilter = (filterCallback) => {
  return listFilms.filter(filterCallback)
}

export const useContinueWatch = () => {
  const ids = [646380, 414906, 131041, 937278, 916224]
  return useFilter((data) => ids.includes(data.id))
}