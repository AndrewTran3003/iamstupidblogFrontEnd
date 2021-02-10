import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div id="navbarHeader">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            I am Stupid Blog
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/articlesList">Articles</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
