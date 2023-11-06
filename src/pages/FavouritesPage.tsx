import { useAppSelector } from "../hooks/redux"

const FavouritesPage = () => {

  const {favourites} = useAppSelector(state => state.github)

  return (
    <ul className="list-none flex m-auto w-fit gap-2 mt-16 flex-col">
      {favourites.length === 0 
        ? <span className="flex justify-center mt-2 text-2xl">Вы еще не добавили ни один репозиторий в избранное</span>
        : favourites.map(favourite => (
          <a href={favourite} target="_blank">
          <li key={favourite} className="px-2 py-4 shadow-md cursor-pointer rounded-lg hover:bg-blue-300 transition-colors">
            {favourite}
          </li>
          </a>

        ))
        }

    </ul>
  )
}

export default FavouritesPage