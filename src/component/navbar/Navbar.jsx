import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav class="navbar flex-container flex-row  align-center">
      <ul class="navlinks flex-container flex-row justify-center align-center">
        <li>
          <Link to="/" className="active-link navlink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="navlink">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="navlink">
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
};
