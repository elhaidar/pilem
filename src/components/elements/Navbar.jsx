import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);
  return (
    <nav className="px-4 lg:px-16 min-w-full bg-transparent backdrop-blur-sm py-4 text-sm border-b-2 border-black border-opacity-10 flex justify-between items-center">
      <h3 className="hidden font-heading font-black text-sm text-sky-300 lg:block">
        <span className="text-xl">P</span>ilem.
      </h3>
      <div className="w-full flex items-center justify-center">
        <button className="mr-8">
          <Link
            to="/"
            className={
              "hover-underline-animation " + (active === "/" && "font-bold")
            }
          >
            Home
          </Link>
        </button>
        <button className="mr-8 text-white text-opacity-50" disabled>
          Upcoming
        </button>
        <button>
          <Link
            to="/explore"
            className={
              "hover-underline-animation " +
              (active === "/explore" && "font-bold")
            }
          >
            Explore
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
