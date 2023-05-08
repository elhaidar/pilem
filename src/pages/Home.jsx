/* eslint-disable react/prop-types */
import Banner from "../components/Banner";
import BannerCard from "../components/BannerCard";
import Card from "../components/Card";
import AuthLayouts from "../components/layouts/AuthLayouts";

const Home = ({
  movies,
  genres,
  windowDimension,
  active,
  setActive,
  movieIndex,
  setMovieIndex,
  setIsLoading,
}) => {
  return (
    <>
      <AuthLayouts movies={movies} movieIndex={movieIndex} type="home">
        <Banner movies={movies[movieIndex]} genres={genres} />
        <BannerCard>
          {movies.length &&
            windowDimension.width < 1024 &&
            movies.map((movie, index) => {
              setIsLoading(true);
              return index < 4 ? (
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
              ) : (
                index > 4 && setIsLoading(false)
              );
            })}
          {movies.length &&
            windowDimension.width >= 1024 &&
            movies.map((movie, index) => {
              setIsLoading(true);
              return index < 8 ? (
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
              ) : (
                index > 8 && setIsLoading(false)
              );
            })}
        </BannerCard>
      </AuthLayouts>
    </>
  );
};

export default Home;
