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

  useEffect(() => {
    const fetchMovie = async (id) => {
      try {
        setLoading(true);
        const response = await api.get(
          `/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
        );
        setMovie(response.data);
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
            <h2 className="text-2xl">{movie.title}</h2>
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
            <p className="pt-3 pb-12 text-sm ">{movie.overview}</p>
            <div className="flex mt-auto justify-between items-center">
              <button className="font-bold border-[1px] border-sky-300 rounded-3xl px-8 py-3 ">
                WATCH NOW
              </button>
              <div className="border-[2px] border-sky-400 rounded-full w-fit px-4 py-3">
                {parseFloat(movie.vote_average).toFixed(1)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
