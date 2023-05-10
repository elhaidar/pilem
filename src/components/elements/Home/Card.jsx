import { useContext } from "react";
import { Context } from "../../context/Context";

// eslint-disable-next-line react/display-name, react/prop-types
const Card = () => {
  // eslint-disable-next-line react/prop-types
  const { movies, setActive, active, setMovieIndex, windowDimension } =
    useContext(Context);

  return (
    <>
      {movies.length > 0 &&
        windowDimension.width < 1024 &&
        movies.map((movie, index) => {
          return (
            index < 4 && (
              <div
                className={
                  (active === movie.id
                    ? "w-[30%] lg:w-[15%]"
                    : "w-[20%] lg:w-[10%]") +
                  ` cursor-pointer transition-all duration-300 hover:brightness-50`
                }
                key={movie.id}
                onClick={() => {
                  setActive(movie.id);
                  setMovieIndex(index);
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                  className="rounded-2xl"
                />
              </div>
            )
          );
        })}
      {movies.length > 0 &&
        windowDimension.width > 1024 &&
        movies.map((movie, index) => {
          return (
            index < 8 && (
              <div
                className={
                  (active === movie.id
                    ? "w-[30%] lg:w-[15%]"
                    : "w-[20%] lg:w-[10%]") +
                  ` cursor-pointer transition-all duration-300 hover:brightness-50`
                }
                key={movie.id}
                onClick={() => {
                  setActive(movie.id);
                  setMovieIndex(index);
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                  className="rounded-2xl"
                />
              </div>
            )
          );
        })}
    </>
  );
};

export default Card;
