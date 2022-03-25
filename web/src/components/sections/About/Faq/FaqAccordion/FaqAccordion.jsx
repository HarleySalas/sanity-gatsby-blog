import React from "react";
import "./faq-accordion.scss";

import Accordion from "../../../../Accordion/Accordion";
import AccordionItem from "../../../../Accordion/AccordionItem/AccordionItem";

const FaqAccordion = () => {
  return (
    <section className="faq-accordion">
      <div className="container faq-accordion__container">
        <Accordion>
          <AccordionItem title="Можно ли у вас заказать индивидуальный проект дома?">
            <p className="faq-accordion__p">
              Да, мы можем разработать проект под вас с учетом всех ваших
              пожеланий.
            </p>
          </AccordionItem>
          <AccordionItem title="Продаете ли вы проекты домов?">
            <p className="faq-accordion__p">
              Нет, мы не занимаемся продажей проектов.
            </p>
          </AccordionItem>
          <AccordionItem title="Тепло ли в доме зимой?">
            <p className="faq-accordion__p">
              Да, все наши дома строятся с применением энергоэффективных
              материалов и технологий и относятся к классу А++ по
              энергоэффективности. Это позволяет поддерживать комфортную
              температуру как летом, так и зимой.
            </p>
          </AccordionItem>
          <AccordionItem title="В чем преимущества каркасного дома перед другими типами?">
            <div className="accordion-item__content__title">
              Основными преимуществами являются:
            </div>
            <ul className="accordion-item__content__ul">
              <li className="accordion-item__content__li">
                Быстрое строительство. В каркасном доме можно проводить
                внутреннюю и внешнюю отделку сразу же после возведения стен, так
                как такой дом не дает усадки.
              </li>
              <li className="accordion-item__content__li">
                Энергоэффективность. Каркасный дом на 80% состоит из утеплителя,
                поэтому летом и зимой в нем комфортная температура, а также это
                позволяет не допустить теплопотери, что снижает коммунальные
                платежи.
              </li>
              <li className="accordion-item__content__li">
                Бюджетный фундамент. Небольшой вес дома позволяет использовать
                свайный, ленточный или винтовой фундамент, не требуя заливки
                ленты или монолитной плиты.
              </li>
              <li className="accordion-item__content__li">
                Возможность строительства в любое время года. Каркасный дом не
                требует заливки бетоном (что нельзя делать при минусовой
                температуре), а материалы выдерживают любую погоду. Из-за
                сезонности зимой обычно стоимость работ и материалов дешевле,
                что дает возможность сэкономить на строительстве.
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion;
