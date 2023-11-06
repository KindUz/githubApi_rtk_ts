import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";
import { useState } from 'react';

const RepoItem = ({ repo }: { repo: IRepo }) => {

  const {addFavourite, removeFavourite} = useActions()
  const {favourites} = useAppSelector(state => state.github)

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addFavourite(repo.html_url)
    setIsFav(true)
  }

  const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    removeFavourite(repo.html_url)
    setIsFav(false)
  }

  return (
    <div className="border py-3 px-5 mb-[8px] cursor-pointer rounded-xl hover:bg-blue-200 transition-all">
      <a href={repo.html_url} target="_blank">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <span className="font-semibold text-xs">{repo?.language}</span>
      </div>
      <p className="text-sm">
        Forks: <span className="font-bold mr-[8px]">{repo.forks}</span>
        Watchers: <span className="font-bold">{repo.watchers}</span>
      </p>
      <p className="text-sm font-thin">{repo?.description}</p>
      </a>
      <div className="flex flex-row justify-between mt-2">
        {!isFav ? 
      <button className="py-2 px-4 bg-blue-300 rounded hover:shadow-md transition-all" onClick={addToFavourite}>
          Add
        </button> :
        <button className="py-2 px-4 bg-red-500 rounded hover:shadow-md transition-all" onClick={removeFromFavourite}>
          Remove
        </button>
        }
      </div>

    </div>
  );
};

export default RepoItem;
