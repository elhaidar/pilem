/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthLayouts from "../components/layouts/AuthLayouts";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Rating from "../components/elements/Rating";
import Genres from "../components/elements/Genres";

const Explore = ({ movies, genres }) => {
  return (
    <AuthLayouts>
      <section className="mt-8">
        <h1 className="font-heading text-3xl mx-8">
          Find Movies, TV Shows, and more ...
        </h1>
        <div className="flex items-center h-10 mt-6">
          <input
            type="text"
            className="bg-gray-800 rounded-full h-full px-4 mr-2 w-full"
            placeholder="Search here . . ."
          />
          <button className="h-full w-14 bg-gray-800 rounded-full">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
          </button>
        </div>
        <div className="flex justify-between w-full h-full mt-4 p-4">
          <div className="w-full h-full rounded-xl bg-blue-400 mr-8"></div>
          <div className="w-full flex flex-col">
            <h2 className="font-heading text-xl">Movies Title</h2>
            <p className="py-1 text-md lg:text-lg]">Movie</p>
            <Rating value={movies && movies.vote_average / 2} />
            <Genres movies={movies} genres={genres} />
          </div>
        </div>
        <div className="hidden flex flex-wrap mt-4">
          <div className="basis-1/3 h-44 p-1">
            <div className="rounded-xl w-full h-full bg-blue-400"></div>
          </div>
          <div className="basis-1/3 h-44 p-1">
            <div className="rounded-xl w-full h-full bg-blue-400"></div>
          </div>
          <div className="basis-1/3 h-44 p-1">
            <div className="rounded-xl w-full h-full bg-blue-400"></div>
          </div>
          <div className="basis-1/3 h-44 p-1">
            <div className="rounded-xl w-full h-full bg-blue-400"></div>
          </div>
        </div>
      </section>
    </AuthLayouts>
  );
};

export default Explore;
