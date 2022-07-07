import React from "react";
import Button from "../../../Button/Button";
import "./contact-details.scss";
import { useScrollToContact } from "../../../../hooks";
import { FaRegEnvelope, FaRegMap, FaRegClock } from "react-icons/fa";

const ContactDetails = ({ data }) => {
  console.log(data);
  const handleScrollToContact = useScrollToContact();

  return (
    <section className="contact-details">
      <div className="container contact-details__container">
        <h2 className="contact-details__title">Как с нами связаться</h2>
        <div className="contact-details__phone-wrapper">
          <a
            href={`tel:${data.companyPhone}`}
            className="contact-details__phone"
          >
            {data.companyPhone}
          </a>
          <div className="contact-details__call-wrapper">
            <Button href={`tel:${data.companyPhone}`} btnSize="xs">
              Позвонить
            </Button>
            <Button onClick={handleScrollToContact} btnSize="xs">
              Заказать звонок
            </Button>
          </div>
        </div>
        <div className="contact-details__detail-wrapper">
          <div className="contact-details__detail">
            <FaRegEnvelope className="contact-details__detail__icon" />

            <div className="contact-details__detail__content">
              <a
                href={`mailTo:${data.companyEmail || "arpine@m-r-s.ru"}`}
                className="contact-details__detail__content__email"
              >
                {data.companyEmail || "arpine@m-r-s.ru"}
              </a>
            </div>
          </div>
          <div className="contact-details__detail">
            <FaRegClock className="contact-details__detail__icon" />
            <div className="contact-details__detail__content">
              Часы работы: {data.workHours}
            </div>
          </div>
          <div className="contact-details__detail">
            <FaRegMap className="contact-details__detail__icon" />
            <div className="contact-details__detail__content">
              {data.businessAddress.streetAddress}
              <br />
              {data.businessAddress.city}
              <br />
              {data.businessAddress.region}
              <br />
              {data.businessAddress.zipcode}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
