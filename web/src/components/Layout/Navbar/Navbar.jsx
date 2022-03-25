import React from "react";
import { Link } from "gatsby";
import "./navbar.scss";

import DesktopNav from "./DesktopNav/DesktopNav";

import Logo from "../../../assets/mrs-logo-light.svg";

import { useScrollTop } from "../../../hooks";

const Navbar = () => {
  const isScrollTop = useScrollTop();

  return (
    <header className={`navbar ${isScrollTop && "navbar--top"}`}>
      <div
        className={`navbar__background ${
          isScrollTop && "navbar__background--top"
        }`}
      ></div>
      <div className="container navbar__container">
        <Link to="/" className="navbar__home">
          <Logo className="navbar__logo" />
        </Link>
        <DesktopNav />
        <div
          className={`navbar__line ${isScrollTop && "navbar__line--top"}`}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
