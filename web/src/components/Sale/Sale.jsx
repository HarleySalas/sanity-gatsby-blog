import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import "./sale.scss";

const Sale = ({ data }) => {
  const date = dayjs(data.enddate).locale(ru).format("D MMMM");

  return (
    <section className="sale">
      <div className="container">
        <div className="sale__content">
          <div className="sale__content__subtitle">Акция</div>
          <p className="sale__content__text">{data ? data.text : null}</p>
          <p className="sale__content__date">
            Акция действительна до <strong>{date}</strong>
          </p>
        </div>
      </div>
      <div className="sale__overlay">
        <StaticImage
          src="../../assets/images/sale-house.png"
          alt="picture of a house"
          className="sale__img"
          objectFit="contain"
          objectPosition="100% 100%"
          placeholder="blurred"
        />
      </div>
    </section>
  );
};

export default Sale;
