import React from "react";
import "./about-content.scss";

const AboutContent = () => {
  return (
    <section className="about-content">
      <div className="container about-content__container">
        <div className="about-content__wrapper">
          <h2 className="about-content__h2">MRS House гарантирует, что:</h2>

          <h2 className="about-content__h3">
            С вами работает штат проверенных специалистов.
          </h2>
          <ul className="about-content__ul">
            <li className="about-content__li">
              Разработкой и согласованием проекта дома занимается проектный
              отдел.
            </li>
            <li className="about-content__li">
              Профессиональные бригады собирают и устанавливают конструкции под
              строгим контролем прораба.
            </li>
            <li className="about-content__li">
              Прораб следит за каждым этапом и проверяет их качество выполнения,
              согласно техническим требованиям.
            </li>
            <li className="about-content__li">
              Менеджер проекта всегда с вами на связи, вы получаете еженедельную
              отчётность о ходе выполнения работ.
            </li>
          </ul>
          <h3 className="about-content__h3">
            При строительстве дома используются сертифицированные и безопасные
            материалы ведущих производителей.
          </h3>
          <ul className="about-content__ul">
            <li className="about-content__li">
              Древесина хвойных пород, устойчивая к перепадам температур,
              обрабатываемая специальными огнебиозащитными составами и защитными
              от насекомых.
            </li>
            <li className="about-content__li">
              Утеплитель, обеспечивающий комфортную температуру как летом, так и
              зимой. Пароизоляция и ветровлагозащита, предотвращающие попадание
              влаги внутрь утеплителя и его выдувание ветром.
            </li>
          </ul>
          <h3 className="about-content__h3">
            Технологии, используемые при строительстве, обеспечат долгую жизнь
            вашему дому.
          </h3>
          <ul className="about-content__ul">
            <li className="about-content__li">
              Даем гарантию 50 лет на материалы и 5 лет на работу (*при условии
              ).
            </li>
          </ul>
          <h2 className="about-content__h2">Строим каркасные дома:</h2>
          <ul className="about-content__ul">
            <li className="about-content__li">
              <strong>В любое время года.</strong>
            </li>
            <li className="about-content__li">
              <strong>Как для постоянного проживания, так и сезонного.</strong>
            </li>
            <li className="about-content__li">
              <strong>
                По готовым проектам и индивидуально разработанным.
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
