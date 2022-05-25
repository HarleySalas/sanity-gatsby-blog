import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./project-carousel.scss";

import ArrowStroke from "../../../../../assets/icons/arrow-stroke.svg";

const ProjectCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (emblaApi) setCurrentIndex(emblaApi.selectedScrollSnap);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);

      return () => emblaApi.off("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  return (
    <section className="project-carousel">
      <div className="project-carousel__carousel">
        <div className="project-carousel__carousel__viewport" ref={emblaRef}>
          <div className="project-carousel__carousel__container">
            {images &&
              images.map((image) => (
                <div
                  className="project-carousel__carousel__slide"
                  key={image.asset.id}
                >
                  <GatsbyImage
                    image={image.asset.gatsbyImageData}
                    backgroundColor="#26262c"
                    layout="fullWidth"
                    alt={image.alt}
                  />
                </div>
              ))}
          </div>
          <div className="project-carousel__carousel__control">
            <div className="project-carousel__carousel__control__points">
              {images &&
                images.map((image, index) => (
                  <button
                    className="project-carousel__carousel__control__point"
                    key={index}
                    onClick={() => scrollTo(index)}
                  >
                    <div
                      className={`project-carousel__carousel__control__point__line ${
                        currentIndex === index &&
                        "project-carousel__carousel__control__point__line--active"
                      }`}
                    ></div>
                  </button>
                ))}
            </div>
            <div className="project-carousel__carousel__control__arrows">
              <button
                className="project-carousel__carousel__control__btn project-carousel__carousel__control__btn--prev"
                onClick={scrollPrev}
              >
                <ArrowStroke className="project-carousel__carousel__control__icon project-carousel__carousel__control__icon--prev" />
              </button>
              <button
                className="project-carousel__carousel__control__btn"
                onClick={scrollNext}
              >
                <ArrowStroke className="project-carousel__carousel__control__icon project-carousel__carousel__control__icon--next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
