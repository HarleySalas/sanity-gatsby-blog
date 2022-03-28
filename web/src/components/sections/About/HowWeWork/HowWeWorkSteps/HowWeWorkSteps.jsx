import React from "react";
import "./how-we-work-steps.scss";

const HowWeWorkSteps = () => {
  return (
    <section className="how-we-work-steps">
      <div className="container how-we-work-steps__container">
        <h2 className="how-we-work-steps__h2">Этапы работы</h2>
        <ol className="how-we-work-steps__ol">
          <li className="how-we-work-steps__li">
            <p className="how-we-work-steps__p">
              {" "}
              Согласовываем проект и его стоимость, подписываем договор об
              оказании услуг
            </p>
          </li>
          <li className="how-we-work-steps__li">
            <p className="how-we-work-steps__p">
              Подготавливаем материалы и доставляем к вам на участок
            </p>
          </li>
          <li className="how-we-work-steps__li">
            <p className="how-we-work-steps__p">
              Подписываем ранее составленный договор о выгрузке материалов
            </p>
          </li>
          <li className="how-we-work-steps__li">
            <p className="how-we-work-steps__p">
              Вы оплачиваете 70% суммы по договору после выгрузки материалов
            </p>
          </li>
          <li className="how-we-work-steps__li">
            <p className="how-we-work-steps__p">
              Монтируем объект на вашем участке
            </p>
          </li>
          <li className="how-we-work-steps__li">
            <p className="how-we-work-steps__p">Проводим отделочные работы</p>
          </li>
          <li className="how-we-work-steps__li">
            <p className="how-we-work-steps__p">
              Сдаем вам готовый дом, подписываем акт приемки-сдачи объекта, вы
              оплачиваете оставшиеся 30% стоимости работ
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default HowWeWorkSteps;
