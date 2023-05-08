import { useEffect, useState } from "react";
import useWindowDimensions from "./components/hooks/useWindowDimension";
import api from "./api";
import Loading from "./pages/Loading";
import ErrorPage from "./pages/404";
import Home from "./pages/Home";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [active, setActive] = useState("");
  const [movieIndex, setMovieIndex] = useState(0);
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
        `/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=2`
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
    <>
      {isLoading && <Loading />}
      {fetchError && <ErrorPage />}
      {!fetchError && !isLoading && (
        <Home
          movies={movies}
          genres={genres}
          windowDimension={windowDimension}
          active={active}
          setActive={setActive}
          movieIndex={movieIndex}
          setMovieIndex={setMovieIndex}
          setIsLoading={setIsLoading}
        />
      )}
    </>
  );
};

export default App;
