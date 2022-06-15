import React, { useCallback } from "react";
import PortableText from "../../../../PortableText/PortableText";
import useEmblaCarousel from "embla-carousel-react";
import "./project-description.scss";
import Button from "../../../../Button/Button";
import ArrowStroke from "../../../../../assets/icons/arrow-stroke.svg";
import ProjectDescriptionModal from "./ProjectDescriptionModal/ProjectDescriptionModal";

const ProjectDescription = ({ data }) => {
  const { blueprintsDisplay, originalBlueprint, _rawDescription } = data;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="project-description">
      <div className="project-description__description-wrapper">
        <div className="project-description__title-wrapper">
          <h2 className="project-description__title">О проекте</h2>
        </div>
        <div className="project-description__text-wrapper">
          <PortableText data={_rawDescription} noMargin />
        </div>
      </div>
      <div className="project-description__blueprints">
        <div className="project-description__blueprints__top">
          <h2 className="project-description__blueprints__title">План этажа</h2>
          <p className="project-description__blueprints__notice project-description__blueprints__notice--mobile">
            На данном плане могут отсутствовать некоторые детали. Для
            максимально точного изображения загрузите исходный файл.
          </p>
          <Button
            btnSize="sm"
            btnColor="grey"
            download={`${originalBlueprint.asset.url}/?dl=${originalBlueprint.asset.originalFilename}`}
          >
            Скачать оригинал
          </Button>
        </div>
        <div className="project-description__blueprints__left">
          {blueprintsDisplay.length > 1 ? (
            <div className="project-description__blueprints__carousel">
              <div
                className="project-description__blueprints__carousel__viewport"
                ref={emblaRef}
              >
                <div className="project-description__blueprints__carousel__container">
                  {blueprintsDisplay.map((blueprint, index) => (
                    <div
                      className="project-description__blueprints__carousel__slide"
                      key={index}
                    >
                      <div className="project-description__blueprints__file-wrapper">
                        <div
                          className="project-description__blueprints__file"
                          dangerouslySetInnerHTML={{
                            __html: blueprint.svg.source,
                          }}
                        ></div>
                        <ProjectDescriptionModal blueprint={blueprint} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={scrollPrev}
                className="project-description__blueprints__btn project-description__blueprints__btn--prev"
              >
                <ArrowStroke className="project-description__blueprints__btn__icon project-description__blueprints__btn__icon--prev" />
              </button>
              <button
                onClick={scrollNext}
                className="project-description__blueprints__btn project-description__blueprints__btn--next"
              >
                <ArrowStroke className="project-description__blueprints__btn__icon project-description__blueprints__btn__icon--next" />
              </button>
            </div>
          ) : (
            <>
              <div className="project-description__blueprints__file-wrapper">
                <div
                  className="project-description__blueprints__file"
                  dangerouslySetInnerHTML={{
                    __html: blueprintsDisplay[0].svg.source,
                  }}
                ></div>
                <ProjectDescriptionModal blueprint={blueprintsDisplay[0]} />
              </div>
            </>
          )}
        </div>
        <div className="project-description__blueprints__right">
          <h2 className="project-description__blueprints__title">План этажа</h2>
          <p className="project-description__blueprints__notice project-description__blueprints__notice--mobile">
            На данном плане могут отсутствовать некоторые детали. Для
            максимально точного изображения загрузите исходный файл.
          </p>
          <Button
            btnSize="sm"
            btnColor="grey"
            download={`${originalBlueprint.asset.url}/?dl=${originalBlueprint.asset.originalFilename}`}
          >
            Скачать оригинал
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
