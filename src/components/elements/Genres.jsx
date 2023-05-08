/* eslint-disable react/prop-types */

const Genres = ({ movies, genres }) => {
  return (
    <p className="text-xs pt-1 pb-3 font-[200] lg:text-base">
      {movies &&
        movies.genre_ids.map((genre, index) => {
          return index === 0 ? (
            <span className="pr-2" key={genre}>
              {genres.map((listGenre) => {
                if (listGenre.id === genre) {
                  return listGenre.name;
                }
              })}
            </span>
          ) : (
            <span className="px-2 border-l-[1px]" key={genre}>
              {genres &&
                genres.map((listGenre) => {
                  if (listGenre.id === genre) {
                    return listGenre.name;
                  }
                })}
            </span>
          );
        })}
    </p>
  );
};

export default Genres;
