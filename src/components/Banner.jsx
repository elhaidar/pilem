/* eslint-disable react/prop-types */
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useState } from "react";
import Rating from "./elements/Rating";
import Genres from "./elements/Genres";

// eslint-disable-next-line react/display-name
const Banner = forwardRef((props, ref) => {
  const { movies, genres } = props;
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <section className="mx-10 mt-10 z-10 lg:mx-20 lg:mt-16">
      <h1 className="font-heading font-black text-4xl tracking-wide lg:text-5xl">
        {movies.title}
      </h1>
      <p className="py-1 text-md lg:text-lg]">Movie</p>
      <Rating value={movies && movies.vote_average / 2} />
      <Genres movies={movies} genres={genres} />
      <div className="flex mt-3 flex-col items-start lg:flex-row">
        <div className="flex mb-4 lg:mb-0">
          <div className="h-14 flex items-center px-6 py-3 w-fit bg-sky-500 cursor-pointer hover:bg-sky-600">
            <FontAwesomeIcon icon={faPlay} className="text-xl" />
          </div>
          <div className="h-14 flex items-center px-6 py-3 w-fit bg-sky-700 cursor-pointer mr-4 hover:bg-sky-800">
            <FontAwesomeIcon icon={faPlus} className="text-xl" />
          </div>
        </div>
        <div className="w-[80%] text-justify text-xs lg:w-[50%]">
          <p>
            <span
              style={
                !isShowMore
                  ? {
                      display: "-webkit-box",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                    }
                  : { display: "-webkit-box" }
              }
              className={
                "mr-2 opacity-75 " + (isShowMore && "text-[0.7rem] lg:text-xs")
              }
              ref={ref}
            >
              {movies.overview}
            </span>
            {movies.overview.length > 200 && (
              <span
                className={"cursor-pointer "}
                onClick={() => setIsShowMore((show) => !show)}
              >
                {isShowMore ? "Show less" : "Show more"}
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
});

export default Banner;
