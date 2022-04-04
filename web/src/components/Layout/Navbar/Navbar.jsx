import React from "react";
import { Link } from "gatsby";
import "./navbar.scss";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

import Logo from "../../../assets/mrs-logo-light.svg";

import { useScrollTop, useMediaQuery } from "../../../hooks";

const Navbar = () => {
  const isScrollTop = useScrollTop();
  const isDesktop = useMediaQuery("(min-width: 75em)");

  return (
    <header className={`navbar ${isScrollTop && "navbar--top"}`}>
      <div
        className={`navbar__background ${
          isScrollTop && "navbar__background--top"
        }`}
      ></div>
      <div className="container navbar__container">
        <div className="navbar__wrapper">
          <Link to="/" className="navbar__home">
            <Logo className="navbar__logo" />
          </Link>
          {isDesktop ? <DesktopNav /> : <MobileNav />}

          <div
            className={`navbar__line ${isScrollTop && "navbar__line--top"}`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
