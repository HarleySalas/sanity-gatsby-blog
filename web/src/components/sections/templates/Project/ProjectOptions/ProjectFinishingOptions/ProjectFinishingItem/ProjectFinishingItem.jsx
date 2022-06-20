import React, { useCallback, useEffect, useState, memo } from "react";
import "./project-finishing-item.scss";
import { toRubleFormat } from "../../../../../../../lib/helpers";
import {
  useDispatch,
  useTrackedState,
} from "../../../../../../../context/store";

import Checkbox from "../../../../../../Checkbox/Checkbox";
import Chevron from "../../../../../../../assets/icons/chevron.svg";

import PortableText from "../../../../../../PortableText/PortableText";
import ProjectFinishingItemFeature from "./ProjectFinishingItemFeature/ProjectFinishingItemFeature";
import { setSelectedProjectFinishing } from "../../../../../../../context/selectedProject/selectedProject.actions";

const defaultClasses = {
  accordion: "project-finishing-item__accordion",
  type: "project-finishing-item__type",
  cost: "project-finishing-item__cost",
  content: "project-finishing-item__content",
};

const ProjectFinishingItem = ({ option, accordionProps }) => {
  const { type, _key, cost, features, _rawDescription } = option;
  const state = useTrackedState();
  const dispatch = useDispatch();
  const [isSelectedOption, setIsSelectedOption] = useState(false);

  const isAccordionOpen = accordionProps.isActive;

  const [classes, setClasses] = useState(defaultClasses);

  const handleSelectOption = useCallback(() => {
    if (state.selectedProject.finish.key !== _key) {
      dispatch(setSelectedProjectFinishing({ finish: option }));
    }
  }, [dispatch, option, _key, state.selectedProject.finish.key]);

  const handleKeyChange = useCallback(() => {
    if (!isSelectedOption && _key === state.selectedProject.finish.key) {
      setIsSelectedOption(true);
    } else if (isSelectedOption && _key !== state.selectedProject.finish.key) {
      setIsSelectedOption(false);
    }
  }, [_key, state.selectedProject.finish.key, isSelectedOption]);

  useEffect(() => {
    handleKeyChange();
  }, [handleKeyChange]);

  useEffect(() => {
    isSelectedOption
      ? setClasses({
          accordion: `${defaultClasses.accordion} ${defaultClasses.accordion}--active`,
          type: `${defaultClasses.type} ${defaultClasses.type}--active`,
          cost: `${defaultClasses.cost} ${defaultClasses.cost}--active`,
          content: `${defaultClasses.content} ${defaultClasses.content}--active`,
        })
      : setClasses(defaultClasses);
  }, [isSelectedOption]);

  return (
    <li className={`project-finishing-item`}>
      <div className={classes.accordion}>
        <div className="project-finishing-item__wrapper">
          <Checkbox
            onChange={handleSelectOption}
            checked={isSelectedOption ? "checked" : false}
            projectStyles
          />
          <div className="project-finishing-item__type-cost">
            <h4 className={classes.type}>{type}</h4>
            <span className={classes.cost}>{toRubleFormat(cost)}</span>
          </div>
          <button
            className={`project-finishing-item__chevron-btn ${
              isAccordionOpen
                ? "project-finishing-item__chevron-btn--active"
                : null
            }`}
            {...accordionProps.triggerProps}
          >
            <Chevron
              className={`project-finishing-item__chevron ${
                isAccordionOpen
                  ? "project-finishing-item__chevron--active"
                  : null
              }`}
            />
          </button>
        </div>
      </div>
      <div className={classes.content} {...accordionProps.contentProps}>
        <div className="project-finishing-item__content__wrapper">
          {_rawDescription ? (
            <div
              className={`project-finishing-item__content__description ${
                !features.length &&
                "project-finishing-item__content__description--noMargin"
              }`}
            >
              <PortableText data={_rawDescription} noMargin />
            </div>
          ) : null}
          {features ? (
            <ul className="project-finishing-item__content__ul">
              {features.map((feature) => (
                <ProjectFinishingItemFeature
                  key={feature._key}
                  feature={feature}
                />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </li>
  );
};

export default memo(ProjectFinishingItem);
