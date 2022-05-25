import React, { useCallback, useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "../../../../../../PortableText/PortableText";
import {
  useDispatch,
  useTrackedState,
} from "../../../../../../../context/store";
import { useMediaQuery } from "../../../../../../../hooks/";
import { setSelectedProjectFoundation } from "../../../../../../../context/selectedProject/selectedProject.actions";
import { toRubleFormat } from "../../../../../../../lib/helpers";
import "./project-foundation-item.scss";

const ProjectFoundationItem = ({ foundation, index }) => {
  const [active, setActive] = useState(false);
  const state = useTrackedState();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery("(min-width: 75em)");

  const handleSelectFoundation = useCallback(() => {
    if (state.selectedProject.foundation.index !== index) {
      dispatch(setSelectedProjectFoundation({ foundation, index }));
    }
  }, [dispatch, foundation, index, state.selectedProject.foundation.index]);

  const handleIndexChange = useCallback(() => {
    if (!active && index === state.selectedProject.foundation.index) {
      setActive(true);
    } else if (active && index !== state.selectedProject.foundation.index) {
      setActive(false);
    }
  }, [index, state.selectedProject.foundation.index, active]);

  useEffect(() => {
    handleIndexChange();
  }, [handleIndexChange]);

  return (
    <li className="project-foundation-item">
      <button
        className={`project-foundation-item__button ${
          active && "project-foundation-item__button--active"
        }`}
        onClick={handleSelectFoundation}
      >
        {isDesktop && (
          <div
            className={`project-foundation-item__img-wrapper ${
              active && "project-foundation-item__img-wrapper--active"
            }`}
          >
            <GatsbyImage
              image={foundation.type.image.asset.gatsbyImageData}
              alt={`Render model of ${foundation.type.name}`}
              width={400}
            />
          </div>
        )}
        <div className="project-foundation-item__info-wrapper">
          <div className="project-foundation-item__title-wrapper">
            <h3
              className={`project-foundation-item__title ${
                active && "project-foundation-item__title--active"
              }`}
            >
              {foundation.type.name}
            </h3>
          </div>
          {!isDesktop && (
            <div
              className={`project-foundation-item__img-wrapper ${
                active && "project-foundation-item__img-wrapper--active"
              }`}
            >
              <GatsbyImage
                image={foundation.type.image.asset.gatsbyImageData}
                alt={`Render model of ${foundation.type.name}`}
                width={400}
              />
            </div>
          )}
          <div
            className={`project-foundation-item__description-wrapper ${
              active && "project-foundation-item__description-wrapper--active"
            }`}
          >
            <PortableText noMargin data={foundation.type._rawDescription} />
          </div>
          <div
            className={`project-foundation-item__cost-wrapper ${
              active && "project-foundation-item__cost-wrapper--active"
            }`}
          >
            {toRubleFormat(foundation.cost)}
          </div>
        </div>
      </button>
    </li>
  );
};

export default ProjectFoundationItem;
