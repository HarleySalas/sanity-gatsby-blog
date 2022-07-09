import React from "react";
import { AiOutlineHome, AiOutlineClockCircle } from "react-icons/ai";
import { IoHammerOutline } from "react-icons/io5";
import { VscFlame } from "react-icons/vsc";
import Button from "../../../Button/Button";
import "./home-how.scss";

const HomeHow = () => {
  return (
    <section className="home-how">
      <div className="container">
        <h2 className="home-how__title">Мы строим</h2>
        <ul className="home-how__ul">
          <li className="home-how__li">
            <div className="home-how__icon-wrapper">
              <AiOutlineClockCircle className="home-how__label__icon" />
            </div>
            <div className="home-how__content-wrapper">
              <h3 className="home-how__label__title">Быстро</h3>
              <p className="home-how__content">
                средний срок строительства 1-3 месяца
              </p>
            </div>
          </li>
          <li className="home-how__li">
            <div className="home-how__icon-wrapper">
              <VscFlame className="home-how__label__icon" />
            </div>

            <div className="home-how__content-wrapper">
              <h3 className="home-how__label__title">Тепло</h3>
              <p className="home-how__content">
                комфортная температура в доме даже при -40 на улице
              </p>
            </div>
          </li>
          <li className="home-how__li">
            <div className="home-how__icon-wrapper">
              <AiOutlineHome className="home-how__label__icon" />
            </div>

            <div className="home-how__content-wrapper">
              <h3 className="home-how__label__title">Надежно</h3>
              <p className="home-how__content">
                расчетный срок эксплуатации дома 100 лет
              </p>
            </div>
          </li>
          <li className="home-how__li">
            <div className="home-how__icon-wrapper">
              <IoHammerOutline className="home-how__label__icon home-how__label__icon--stroke" />
            </div>

            <div className="home-how__content-wrapper">
              <h3 className="home-how__label__title">Безопасно</h3>
              <p className="home-how__content">
                используем негорючий утеплитель и обработанную огнебиозащитными
                составами древесину
              </p>
            </div>
          </li>
        </ul>
        <Button
          btnSize="sm"
          btnColor="grey"
          linkTo="/about/technologies-and-materials"
          arrowRight
        >
          Больше о технологии
        </Button>
      </div>
    </section>
  );
};

export default HomeHow;
