import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";
import "./mobile-nav-menu.scss";
import { useScrollLock } from "../../../../../hooks";

const MobileNavMenu = ({ isOpen }) => {
  const [, setRendered] = useState(false);
  const menuRef = useRef(null);
  const [lockScroll, unlockScroll] = useScrollLock();

  const handleOnEnter = () => {
    lockScroll();
  };

  const handleOnEntered = () => {
    setRendered(true);
  };

  const handleOnExit = () => {
    setRendered(false);
    //unlocks scroll when clicking X and closing the navigation menu.
    unlockScroll();
  };

  useEffect(() => {
    //unlocks scroll when clicking a link on the mobile navigation menu.
    return unlockScroll();
  }, [unlockScroll]);

  return (
    <CSSTransition
      in={isOpen}
      timeout={1000}
      classNames="mobile-nav-menu"
      unmountOnExit
      onEnter={() => handleOnEnter()}
      onEntered={() => handleOnEntered()}
      onExit={() => handleOnExit()}
    >
      <nav className="mobile-nav-menu" ref={menuRef}>
        <div className="container mobile-nav-menu__container">
          <ul className="mobile-nav-menu__ul">
            <li className="mobile-nav-menu__li">
              <Link to="/" className="mobile-nav-menu__link">
                Главная
              </Link>
            </li>
            <li className="mobile-nav-menu__li">
              <Link to="/projects" className="mobile-nav-menu__link">
                Проекты
              </Link>
            </li>
            <li className="mobile-nav-menu__li">
              <Link to="/about" className="mobile-nav-menu__link">
                О компании
              </Link>
            </li>
            <li className="mobile-nav-menu__li">
              <Link to="/articles" className="mobile-nav-menu__link">
                Статьи
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </CSSTransition>
  );
};

export default MobileNavMenu;
