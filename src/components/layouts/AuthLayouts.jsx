import { useContext } from "react";
import Background from "../elements/Home/Background";
import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";
import { Context } from "../context/Context";

// eslint-disable-next-line react/prop-types
const AuthLayouts = ({ children, type }) => {
  const { movies, movieIndex } = useContext(Context);
  return (
    <div className="flex flex-col max-w-[1366px] min-h-screen max-h-full">
      {type === "home" && movies.length > 0 && (
        <Background
          // eslint-disable-next-line react/prop-types
          image={`https://image.tmdb.org/t/p/original${movies[movieIndex].backdrop_path}`}
        />
      )}

      <div className="flex flex-col items-center min-h-screen h-full w-full">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayouts;
