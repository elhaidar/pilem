/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthLayouts from "../components/layouts/AuthLayouts";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Rating from "../components/elements/Rating";
import Genres from "../components/elements/Genres";
import { useContext, useEffect, useState } from "react";
import { Context } from "../components/context/Context";
import api from "../api";
import Loading from "./Loading";
import ErrorPage from "./404";

const ExplorePage = () => {
  const { movies, isLoading, fetchError, setFetchError } = useContext(Context);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearchedMovies(movies);
  }, [movies]);

  useEffect(() => {
    const fetchMovie = async (data) => {
      setLoading(true);
      try {
        const response = await api.get(
          `/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${data}`
        );
        setSearchedMovies(response.data.results);
      } catch (err) {
        if (err.response) {
          setFetchError(err.response.data.status_message);
          //NOT in 200 status range
        } else {
          setFetchError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    search && fetchMovie(search);
  }, [search, setFetchError]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    e.target.value ? setSearch(e.target.value) : setSearchedMovies(movies);
  };

  return (
    <>
      {isLoading && <Loading />}
      {fetchError && <ErrorPage />}
      {!fetchError && !isLoading && (
        <AuthLayouts>
          <section className="h-full my-8 px-3 w-screen max-w-[1366px]">
            <div className="w-full px-8 lg:px-16">
              <h1 className="font-heading text-3xl pl-4">
                Find Movies, TV Shows, and more ...
              </h1>
              <form
                className="flex items-center h-10 mt-6"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  className="bg-gray-800 rounded-full h-full px-4 mr-2 w-full"
                  placeholder="Search here . . ."
                  onChange={(e) => handleSearch(e)}
                />
                <button className="h-full w-14 bg-gray-800 rounded-full">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-lg"
                  />
                </button>
              </form>
            </div>
            <div className="hidden  justify-between w-full h-full mt-4 p-4">
              <div className="w-full h-full rounded-xl bg-blue-400 mr-8"></div>
              <div className="w-full flex flex-col">
                <h2 className="font-heading text-xl">Movies Title</h2>
                <p className="py-1 text-md lg:text-lg]">Movie</p>
                <Rating />
                <Genres />
              </div>
            </div>
            <div className="w-full flex flex-wrap mt-4 items-center">
              {searchedMovies.length > 0 &&
                !loading &&
                searchedMovies.map((movie) => {
                  return (
                    movie.poster_path && (
                      <div
                        className="basis-1/3 md:basis-1/4 lg:basis-1/6 min-h-full p-1 flex justify-center items-center"
                        key={movie.id}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          alt=""
                          className="rounded-xl w-[inherit] h-[inherit] flex items-center justify-center"
                        />
                      </div>
                    )
                  );
                })}
              {loading && (
                <p className="w-full flex justify-center items-center h-screen -mt-32">
                  Loading...
                </p>
              )}
            </div>
          </section>
        </AuthLayouts>
      )}
    </>
  );
};

export default ExplorePage;
