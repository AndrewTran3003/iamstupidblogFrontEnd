import React, { useState } from "react";
import { Link } from "react-router-dom";



const NavBar = () => {
  let [isClicked, setIsClicked] = useState(false);
  let [isHidden, setIsHidden] = useState(true);

  function ClickMe(): void {
    let newState: boolean = true;
    if (isClicked){
      newState = false;
    }
    setIsClicked(newState);
    setIsHidden(false);
  }
  return (
    <div className={`navbar-header ${isClicked ? "open" : ""}`}>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              I am Stupid Blog
            </Link>
          </div>

          <a
            className="button-hamburger hide-for-desktop"
            id="button-hamburger"
            onClick={ClickMe}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <nav>
            <ul
              className={` navbar-link ${
                isHidden ? "hide-navbar" : isClicked ? "fade-in" : "fade-out"
              }`}
            >
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
        <div className = {`${isHidden? "" : "overlay"} ${isClicked? "fade-in-overlay": "fade-out-overlay"}`}></div>
      </div>
    </div>
  );
};

export default NavBar;

