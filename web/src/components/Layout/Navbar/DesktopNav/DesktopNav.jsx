import React from "react";
import { Link } from "gatsby";
import "./desktop-nav.scss";

const DesktopNav = () => {
  return (
    <>
      <nav className="desktop-nav">
        <ul className="desktop-nav__ul">
          <li className="desktop-nav__li">
            <Link
              to="/"
              className="desktop-nav__link"
              activeClassName="desktop-nav__link--active"
            >
              Главная
            </Link>
          </li>
          <li className="desktop-nav__li">
            <Link
              to="/projects"
              className="desktop-nav__link"
              activeClassName="desktop-nav__link--active"
            >
              Проекты
            </Link>
          </li>
          <li className="desktop-nav__li">
            <Link
              to="/about"
              className="desktop-nav__link"
              activeClassName="desktop-nav__link--active"
            >
              О компании
            </Link>
            <ul className="desktop-nav__sub-ul">
              <li className="desktop-nav__sub-li">
                <Link
                  to="/about/company"
                  className="desktop-nav__sub-link"
                  activeClassName="desktop-nav__sub-link--active"
                >
                  О нас
                </Link>
              </li>
              <li className="desktop-nav__sub-li">
                <Link
                  to="/about/how-we-work"
                  className="desktop-nav__sub-link"
                  activeClassName="desktop-nav__sub-link--active"
                >
                  Как мы работаем
                </Link>
              </li>
              <li className="desktop-nav__sub-li">
                <Link
                  to="/about/technologies-and-materials"
                  className="desktop-nav__sub-link"
                  activeClassName="desktop-nav__sub-link--active"
                >
                  Технологии и материалы
                </Link>
              </li>
              <li className="desktop-nav__sub-li">
                <Link
                  to="/about/credit-maternity-capital"
                  className="desktop-nav__sub-link"
                  activeClassName="desktop-nav__sub-link--active"
                >
                  Кредит и материнский капитал
                </Link>
              </li>
              <li className="desktop-nav__sub-li">
                <Link
                  to="/about/reviews"
                  className="desktop-nav__sub-link"
                  activeClassName="desktop-nav__sub-link--active"
                >
                  Отзывы
                </Link>
              </li>
              <li className="desktop-nav__sub-li">
                <Link
                  to="/about/licenses"
                  className="desktop-nav__sub-link"
                  activeClassName="desktop-nav__sub-link--active"
                >
                  Лицензии
                </Link>
              </li>
              <li className="desktop-nav__sub-li">
                <Link
                  to="/about/faq"
                  className="desktop-nav__sub-link"
                  activeClassName="desktop-nav__sub-link--active"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </li>
          <li className="desktop-nav__li">
            <Link
              to="/articles"
              className="desktop-nav__link"
              activeClassName="desktop-nav__link--active"
            >
              Статьи
            </Link>
          </li>
          {/* <li className="desktop-nav__li">
            <Link
              to="/list"
              className="desktop-nav__link"
              activeClassName="desktop-nav__link--active"
            >
              LIST (Temp)
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="desktop-nav__contact">
        <a href="tel:+74955161631" className="desktop-nav__contact__phone">
          +7 (495) 516 16 31
          {/* +7 (111) 111 11 11 */}
        </a>
        <Link
          to="/contact"
          className="desktop-nav__contact__link"
          activeClassName="desktop-nav__contact__link--active"
        >
          <button className="desktop-nav__contact__btn">Контакты</button>
        </Link>
      </div>
    </>
  );
};

export default DesktopNav;
