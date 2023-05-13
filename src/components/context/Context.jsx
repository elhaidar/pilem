import { createContext, useEffect, useState } from "react";
import api from "../../api";
import useWindowDimensions from "../hooks/useWindowDimension";

const Context = createContext(null);

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [active, setActive] = useState("");
  const [movieIndex, setMovieIndex] = useState(0);
  const [movieId, setMovieId] = useState("");
  const [movie, setMovie] = useState({});
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const windowDimension = useWindowDimensions();

  const fetchAPI = async (url) => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (err) {
      if (err.response) {
        setFetchError(err.response.data.status_message);
        //NOT in 200 status range
        console.log(err.response.data);
      } else {
        setFetchError(err.message);
        console.log(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const dataMovies = await fetchAPI(
        `/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`
      );
      setMovies(dataMovies.results);
      setActive(dataMovies.results[0].id);
      const dataGenre = await fetchAPI(
        `/genre/movie/list?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      setGenres(dataGenre.genres);
    };
    fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        movies,
        genres,
        isLoading,
        fetchError,
        setFetchError,
        active,
        setActive,
        windowDimension,
        movieIndex,
        setMovieIndex,
        movieId,
        setMovieId,
        movie,
        setMovie,
        modal,
        setModal,
        search,
        setSearch
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
