import React from "react";
import { Link } from "gatsby";
import "./footer.scss";

import Logo from "../../../assets/mrs-logo-light.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link to="/" className="footer__top__link">
          <Logo className="footer__top__logo" />
        </Link>
      </div>
      <div className="container footer__container">
        <div className="footer__row">
          <div className="footer__col">
            <div className="footer__col__title">Основные</div>
            <ul className="footer__ul">
              <li className="footer__li">
                <Link to="/" className="footer__li__link">
                  Главная
                </Link>
              </li>
              <li className="footer__li">
                <Link to="/projects" className="footer__li__link">
                  Проекты
                </Link>
              </li>
              <li className="footer__li">
                <Link to="/about" className="footer__li__link">
                  О компании
                </Link>
              </li>
              <li className="footer__li">
                <Link to="/articles" className="footer__li__link">
                  Статьи
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <div className="footer__col__title">О компании</div>
            <ul className="footer__ul">
              <li className="footer__li">
                <Link to="/about/company" className="footer__li__link">
                  О нас
                </Link>
              </li>
              <li className="footer__li">
                <Link to="/about/how-we-work" className="footer__li__link">
                  Как мы работаем
                </Link>
              </li>
              <li className="footer__li">
                <Link
                  to="/about/technologies-and-materials"
                  className="footer__li__link"
                >
                  Технологии и материалы
                </Link>
              </li>
              <li className="footer__li">
                <Link
                  to="/about/credit-maternity-capital"
                  className="footer__li__link"
                >
                  Кредит и материнский капитал
                </Link>
              </li>
              <li className="footer__li">
                <Link to="/about/reviews" className="footer__li__link">
                  Отзывы
                </Link>
              </li>
              <li className="footer__li">
                <Link to="/about/licenses" className="footer__li__link">
                  Лицензии
                </Link>
              </li>
              <li className="footer__li">
                <Link to="/about/faq" className="footer__li__link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <div className="footer__col__title">Контакты</div>
            <a href="tel:+74955161631" className="footer__phone">
              +7 (495) 516 16 31
            </a>
            <div className="footer__hours">Часы работы: 8:00-17:00</div>
            <div className="footer__address">
              <a
                href="https://yandex.ru/maps/-/CCUB5VHHdC"
                className="footer__address__link"
                rel="noreferrer"
                target="_blank"
              >
                ул. Станционная, д. 61
                <br />
                мкр. Болшево, г. Королёв,
                <br />
                Московская область,
                <br />
                141060
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__col">
            <Link to="/sitemap" className="footer__bottom__col__link">
              Sitemap
            </Link>
          </div>
          <div className="footer__bottom__col">
            &copy; 2016 - {new Date().getFullYear()} ООО СК «Монтажремстрой»
          </div>
        </div>
      </div>
      <div className="footer__warning">
        Вся представленная на сайте информация не является публичной офертой
      </div>
    </footer>
  );
};

export default Footer;
