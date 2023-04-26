import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <nav className="bg-transparent backdrop-blur-sm py-4 text-sm border-b-2 border-black border-opacity-10 flex justify-center items-center">
      <h3 className="hidden font-heading font-black float-left absolute left-20 text-sm text-sky-300 lg:block">
        <span className="text-xl">P</span>ilem.
      </h3>
      <ul className="flex justify-center">
        <li className="mr-8">
          <Link
            className={
              "hover-underline-animation " + (active === "home" && "font-bold")
            }
            onClick={() => {
              setActive("home");
            }}
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
            onClick={() => {
              setActive("trending");
            }}
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
            onClick={() => {
              setActive("upcoming");
            }}
          >
            Upcoming
          </Link>
        </li>
        <li>
          <Link
            className={
              "hover-underline-animation " +
              (active === "search" && "font-bold")
            }
            onClick={() => {
              setActive("search");
            }}
          >
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
