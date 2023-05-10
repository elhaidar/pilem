import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full font-sans mt-auto text-sm flex justify-center items-center py-3 bg-[#050b11] backdrop-blur-md">
      <p className="flex items-center">
        Build with{" "}
        <FontAwesomeIcon icon={faHeart} className="text-red-500 w-4 mx-2" />{" "}
        using{" "}
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faReact}
            className="text-sky-400 text-base mx-3 "
          />
        </a>{" "}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="vite.svg" className="w-4 mr-2" />
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          <img src="tailwind-css.svg" className="w-5 mr-3" />
        </a>
        <a href="https://themoviedb.org" target="_blank" rel="noreferrer">
          <img src="tmdb.svg" className="w-6 mr-3" />
        </a>
        by
        <span className="text-sky-300 ml-1">
          <a
            href="https://github.com/elhaidar"
            target="_blank"
            rel="noreferrer"
          >
            Haidar
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
