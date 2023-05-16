import { useContext, useEffect, useState } from "react";
import api from "../../../api";
import { Context } from "../../context/Context";
import Loading from "../../../pages/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ErrorPage from "../../../pages/404";

const MovieDetails = () => {
  const { fetchError, setFetchError, movieId, movie, setMovie, setModal } =
    useContext(Context);
  const [loading, setLoading] = useState(true);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchMovie = async (id) => {
      try {
        setLoading(true);
        const responseMovie = await api.get(
          `/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
        );

        const responseCast = await api.get(
          `/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
        );
        const dataCast = responseCast.data.cast.filter(
          (cast) => cast.known_for_department === "Acting"
        );
        setMovie(responseMovie.data);
        setCasts(dataCast);
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
        setLoading(false);
      }
    };
    movieId && fetchMovie(movieId);
  }, [movieId, setFetchError, setMovie]);

  return (
    <>
      {loading && <Loading />}
      {!loading && fetchError && <ErrorPage />}
      {!loading && !fetchError && movie && (
        <div className="relative min-h-screen w-screen max-w-[768px] bg-gray-950 flex flex-col justify-center items-center">
          <span
            className="text-stone-300 text-xl z-10 absolute top-3 left-5 cursor-pointer hover:text-white"
            onClick={() => setModal(false)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <div className="shadow-banner">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-full h-full min-h-[30vh]"
              alt=""
            />
          </div>
          <div className="flex flex-grow flex-col w-full z-10 p-8 lg:p-16 rounded-3xl bg-gray-950 -mt-5">
            <h2 className="text-2xl">
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm pt-1 font-[200] lg:text-base">
                  {movie.genres.map((genre, index) => {
                    return (
                      <span
                        key={genre.id}
                        className={index === 0 ? "pr-1" : "px-1"}
                      >
                        {genre.name}
                        {index < movie.genres.length - 1 && ","}
                      </span>
                    );
                  })}
                </p>
                <p className="text-sm py-2 font-[200] lg:text-base">
                  {movie.runtime} minutes
                </p>
              </div>
              <div className="mx-8 border-[2px] border-sky-400 rounded-full w-fit h-full p-2 text-sky-500">
                {parseFloat(movie.vote_average).toFixed(1)}
              </div>
            </div>
            <p className="py-3 text-sm">{movie.overview}</p>
            <div className="pt-4 pb-2 mt-auto">
              <h3 className="text-xl underline underline-offset-8 decoration-sky-400">
                Top Cast
              </h3>

              <div className="w-full flex flex-wrap mt-4 items-center">
                {casts &&
                  casts.map((cast) => {
                    return (
                      cast.profile_path && (
                        <div
                          key={cast.id}
                          className="basis-1/3 md:basis-1/4 lg:basis-1/6 min-h-full p-1 flex flex-col justify-center items-center py-4"
                        >
                          <div className="w-20 h-20 rounded-full flex items-center justify-center">
                            <img
                              src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                              alt=""
                              className="object-cover object-center w-full h-full rounded-full "
                            />
                          </div>
                          <div className="text-center pt-3">
                            <p className="text-xs">{cast.name}</p>
                            <p className="text-stone-300 text-xs">
                              {cast.character}
                            </p>
                          </div>
                        </div>
                      )
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
