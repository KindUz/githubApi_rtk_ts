import { useState, useEffect } from "react";
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";
import Loading from "../Components/Loading";
import RepoItem from "../Components/RepoItem";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const {isLoading, isError, data: users} = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })
  const [fetchRepos, {isLoading: isReposLoading, data: repos}] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown(debounced.length > 3 && users?.length! > 0)
    console.log(repos);
  }, [debounced, users])

  const clickHandler = (username: string) => {
    setDropdown(false)
    fetchRepos(username);
  }

  return (
    <div className="flex justify-center pt-10 mx-auto  w-screen ">
      {isError && <p className="text-center text-red-600">Возникла ошибка</p>}
      <div className="relative w-[560px]">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Введите ник пользователя Github"
        />
        {dropdown && (
          <ul className="absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-auto shadow-md bg-white">
            {isLoading && <p className="text-center">Loading</p>}
            {users?.map((user) => (
              <li
                key={user.id}
                onClick={() => clickHandler(user.login)}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
        <div className="container">
          {isReposLoading && <Loading />}
          {repos?.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
