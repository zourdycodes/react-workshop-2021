import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            style={{
              color: "white",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: "white",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/people"
            style={{
              color: "white",
            }}
          >
            People
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
