import Background from "../Background";
import Footer from "../Footer";
import Navbar from "../Navbar";

// eslint-disable-next-line react/prop-types
const AuthLayouts = ({ children, movies, movieIndex, type }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1366px] ">
      {type === "home" && (
        <Background
          // eslint-disable-next-line react/prop-types
          image={`https://image.tmdb.org/t/p/original${movies[movieIndex].poster_path}`}
        />
      )}

      <div className="w-screen">
        <div className="flex flex-col h-screen px-4 lg:px-16">
          <Navbar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayouts;
