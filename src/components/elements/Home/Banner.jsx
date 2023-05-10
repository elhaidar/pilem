/* eslint-disable react/prop-types */
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import Rating from "../Rating";
import Genres from "../Genres";
import { Context } from "../../context/Context";

// eslint-disable-next-line react/display-name
const Banner = () => {
  const { movies, movieIndex } = useContext(Context);
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <section className="px-8 w-screen max-w-[1366px] lg:px-16 mt-10 lg:mt-16">
      <h1 className="font-heading font-black text-4xl tracking-wide lg:text-5xl">
        {movies.length > 0 && movies[movieIndex].title}
      </h1>
      <p className="py-1 text-md lg:text-lg]">Movie</p>
      <Rating />
      <Genres />
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
            >
              {movies.length > 0 && movies[movieIndex].overview}
            </span>
            {movies.length > 0 && movies[movieIndex].overview.length > 200 && (
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
};

export default Banner;
