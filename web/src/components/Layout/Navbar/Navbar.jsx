import React, { useEffect, useCallback } from "react";
import { Link } from "gatsby";
import "./navbar.scss";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

import Logo from "../../../assets/mrs-logo-light.svg";

import { useScrollTop, useMediaQuery, useToggle } from "../../../hooks";

const Navbar = ({ location }) => {
  const isScrollTop = useScrollTop();
  const isDesktop = useMediaQuery("(min-width: 75em)");
  const [isMobileOpen, toggleMobile] = useToggle(false);

  const handleResizeWhileMobileOpen = useCallback(() => {
    if (isDesktop && isMobileOpen) {
      toggleMobile(false);
    }
  }, [isDesktop, isMobileOpen, toggleMobile]);

  useEffect(() => {
    handleResizeWhileMobileOpen();
  }, [handleResizeWhileMobileOpen]);

  return (
    <header
      className={`navbar ${
        (isScrollTop && "navbar--top") ||
        (isMobileOpen && "navbar--top navbar--delay")
      }`}
    >
      <div
        className={`navbar__background ${
          isScrollTop && "navbar__background--top"
        } ${
          !isScrollTop &&
          isMobileOpen &&
          "navbar__background--top navbar__background--delay"
        }`}
      ></div>
      <div className="container navbar__container">
        <div className="navbar__wrapper">
          <Link to="/" className="navbar__home">
            <Logo className="navbar__logo" />
          </Link>
          {isDesktop ? (
            <DesktopNav />
          ) : (
            <MobileNav
              isOpen={isMobileOpen}
              toggle={toggleMobile}
              location={location}
            />
          )}

          <div
            className={`navbar__line ${
              isScrollTop && !isMobileOpen && "navbar__line--top"
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
