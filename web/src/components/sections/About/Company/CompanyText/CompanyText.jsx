import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import "./company-text.scss";

const CompanyText = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/about-house.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 1200)
        }
      }
    }
  `);
  return (
    <section className="company-text">
      <div className="container company-text__container">
        <div className="company-text__wrapper">
          <div className="company-text__img-wrapper">
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              className="company-text__img"
              alt="main office building of MRS House"
            />
          </div>
          <div className="company-text__text-wrapper">
            <p className="company-text__p">
              MRS House (ООО СК «Монтажремстрой») - эксперт в области
              строительства каркасных домов по канадским и финским технологиям в
              Москве и Московской области.
            </p>
            <p className="company-text__p">
              Компания осуществляет свою деятельность на строительном рынке с
              2016 г.
            </p>
            <p className="company-text__p">
              Миссией MRS House всегда являлось и является создание
              высококачественных домов в стиле лофт (барнхаус, А-фрейм), шале
              или классическом стиле по доступным ценам.
            </p>
            <p className="company-text__p">
              Компания имеет собственную практичную материально-техническую
              базу, поэтому вы можете быть уверены в безопасности и прочности
              наших домов.
            </p>
            <p className="company-text__p">
              Профессиональные бригады собирают и устанавливают конструкции под
              строгим контролем прораба. У вас никогда не возникнет вопросов о
              надежности и безопасности дома, менеджер проекта всегда с вами на
              связи, вы получаете еженедельную отчётность о ходе выполнения
              работ.
            </p>
            <p className="company-text__p">
              Высокие канадские и европейские стандарты качества, используемые
              при разработке и строительстве проектов, гарантируют долголетие
              наших домов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyText;
