import { useEffect, useState } from "react";
import Background from "./components/Background";
import Banner from "./components/Banner";
import BannerCard from "./components/BannerCard";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import useWindowDimensions from "./components/hooks/useWindowDimension";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [active, setActive] = useState("");
  const [movieIndex, setMovieIndex] = useState(0);
  const windowDimension = useWindowDimensions();

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "";

  const fetchData = async (url, type) => {
    try {
      const response = await fetch(`${API_URL}${url}`);
      if (!response.ok) throw new Error("Did not receive expected data");
      const json = await response.json();
      setFetchError(null);
      if (type === "movies") {
        setActive(json.results[0].id);
        return json.results;
      } else return json.genres;
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () =>
      setMovies(
        await fetchData(
          `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
          "movies"
        )
      ))();
    (async () =>
      setGenres(
        await fetchData(
          `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
          "genres"
        )
      ))();
  }, []);

  return (
    <div className="w-screen flex flex-col h-screen">
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <p className="font-heading font-black text-sky-300 text-4xl ">
            <span className="text-6xl">P</span>ilem.
          </p>
        </div>
      )}
      {fetchError && (
        <div>
          <p className="text-3xl flex justify-center items-center">Oops...</p>
          <p className="text-3xl flex justify-center items-center">
            {`Error: ${fetchError}`}
          </p>
        </div>
      )}
      {!fetchError && !isLoading && (
        <>
          <Navbar />
          <Background
            image={`https://image.tmdb.org/t/p/original${movies[movieIndex].poster_path}`}
          />
          <Banner movies={movies[movieIndex]} genres={genres} />
          <BannerCard>
            {movies.length &&
              windowDimension.width < 1024 &&
              movies.map((movie, index) => {
                return (
                  index < 4 && (
                    <Card
                      key={movie.id}
                      image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      classname={
                        active === movie.id
                          ? "w-[30%] lg:w-[15%]"
                          : "w-[20%] lg:w-[10%]"
                      }
                      onClick={() => {
                        setActive(movie.id);
                        setMovieIndex(index);
                      }}
                    />
                  )
                );
              })}
            {movies.length &&
              windowDimension.width >= 1024 &&
              movies.map((movie, index) => {
                return (
                  index < 8 && (
                    <Card
                      key={movie.id}
                      image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      classname={
                        active === movie.id
                          ? "w-[30%] lg:w-[15%]"
                          : "w-[20%] lg:w-[10%]"
                      }
                      onClick={() => {
                        setActive(movie.id);
                        setMovieIndex(index);
                      }}
                    />
                  )
                );
              })}
          </BannerCard>
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
