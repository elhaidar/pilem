import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);
  return (
    <nav className="w-full bg-transparent backdrop-blur-sm py-4 text-sm border-b-2 border-black border-opacity-10 flex justify-between items-center">
      <h3 className="hidden font-heading font-black text-sm text-sky-300 lg:block">
        <span className="text-xl">P</span>ilem.
      </h3>
      <ul className="w-full flex items-center justify-center">
        <li className="mr-8">
          <Link
            to="/"
            className={
              "hover-underline-animation " + (active === "/" && "font-bold")
            }
          >
            Home
          </Link>
        </li>
        <li className="mr-8">
          <Link
            className={
              "hover-underline-animation " +
              (active === "trending" && "font-bold")
            }
          >
            Trending
          </Link>
        </li>
        <li className="mr-8">
          <Link
            className={
              "hover-underline-animation " +
              (active === "upcoming" && "font-bold")
            }
          >
            Upcoming
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className={
              "hover-underline-animation " +
              (active === "/explore" && "font-bold")
            }
          >
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
