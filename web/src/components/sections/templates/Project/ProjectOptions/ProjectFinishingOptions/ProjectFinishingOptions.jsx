import React, { useState, useEffect, useCallback, useRef } from "react";
import "./project-finishing-options.scss";
import ProjectFinishingItem from "./ProjectFinishingItem/ProjectFinishingItem";
import {
  useAccordion,
  useToggle,
  useWindowResize,
} from "../../../../../../hooks";
import projectFinishesDefault from "./projectFinishesDefault";
import { toRubleFormat } from "../../../../../../lib/helpers";
import Checkbox from "../../../../../Checkbox/Checkbox";
import { useDispatch, useTrackedState } from "../../../../../../context/store";
import Chevron from "../../../../../../assets/icons/chevron.svg";
import { setSelectedProjectFinishing } from "../../../../../../context/selectedProject/selectedProject.actions";

const ProjectFinishingOptions = ({ options }) => {
  const accordionKeys = options ? options.map((option) => option._key) : [];
  const accordionProps = useAccordion(accordionKeys);
  const accordionContentRef = useRef(null);

  const state = useTrackedState();
  const dispatch = useDispatch();
  const [accordionContentHeight, setAccordionContentHeight] = useState(0);
  const windowSize = useWindowResize();
  const [isAccordionOpen, toggleAccordion] = useToggle(false);

  const handleAccordionContentHeight = useCallback(() => {
    accordionContentRef.current &&
      setAccordionContentHeight(accordionContentRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    handleAccordionContentHeight();
  }, [handleAccordionContentHeight, windowSize]);

  const handleSelectOption = useCallback(
    (e) => {
      if (state.selectedProject.finish.key !== e.target.dataset.key) {
        dispatch(
          setSelectedProjectFinishing({
            finish: projectFinishesDefault.filter(
              (finish) => finish._key === e.target.dataset.key
            )[0],
          })
        );
      }
    },
    [dispatch, state.selectedProject.finish.key]
  );

  const handleAccordionToggle = useCallback(
    (e) => {
      if (e.type === "keydown" && e.keyCode === "13") toggleAccordion();
      if (e.type === "click") toggleAccordion();
    },
    [toggleAccordion]
  );

  return (
    <div className="project-finishing-options">
      {options.length > 0 ? (
        <>
          <h3 className="project-finishing-options__title">
            Выберите вид отделки
          </h3>
          <div className="project-finishing-options__wrapper">
            <ul className="project-finishing-options__ul">
              {options.map((option) => (
                <ProjectFinishingItem
                  key={option._key}
                  option={option}
                  accordionProps={accordionProps[option._key]}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <h3 className="project-finishing-options__title">Варианты отделки</h3>
          <div className="project-finishing-options__wrapper">
            <ul className="project-finishing-options__ul">
              <li className="project-finishing-item">
                <div className="project-finishing-item__accordion">
                  <div className="project-finishing-item__wrapper">
                    <Checkbox
                      onChange={handleSelectOption}
                      dataKey={`${projectFinishesDefault[0]._key}`}
                      checked={
                        state.selectedProject.finish.key ===
                        projectFinishesDefault[0]._key
                          ? " checked"
                          : false
                      }
                    />
                    <div className="project-finishing-item__type-cost">
                      <h4 className="project-finishing-item__type">
                        {projectFinishesDefault[0].type}
                      </h4>
                      <span className="project-finishing-item__cost">
                        {toRubleFormat(projectFinishesDefault[0].cost)}
                      </span>
                    </div>
                    <button
                      className={`project-finishing-item__chevron-btn ${
                        isAccordionOpen
                          ? "project-finishing-item__chevron-btn--active"
                          : null
                      }`}
                      aria-expanded={isAccordionOpen}
                      tabIndex="0"
                      onClick={handleAccordionToggle}
                      onKeyDown={handleAccordionToggle}
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
                <div
                  className="project-finishing-item__content"
                  ref={accordionContentRef}
                  aria-hidden={isAccordionOpen ? false : true}
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    maxHeight: `${
                      isAccordionOpen ? accordionContentHeight : 0
                    }px`,
                  }}
                >
                  <div className="project-finishing-item__content__wrapper">
                    <div className="projectfinishing-item__content__description">
                      <p>{projectFinishesDefault[0].content}</p>
                      <br />
                    </div>
                    <ul className="project-finishing-item__content__ul">
                      {projectFinishesDefault[0].features.map(
                        (feature, index) => (
                          <li
                            className="project-finishing-item-feature"
                            key={index}
                          >
                            <div className="project-finishing-item-feature__wrapper">
                              <div className="project-finishing-item-feature__icon">
                                +
                              </div>
                              <div className="project-finishing-item-feature__title">
                                {feature}
                              </div>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="project-finishing-options__li">
                <div className="project-finishing-options__li-wrapper">
                  <Checkbox
                    onChange={handleSelectOption}
                    dataKey={`${projectFinishesDefault[1]._key}`}
                    checked={
                      state.selectedProject.finish.key ===
                      projectFinishesDefault[1]._key
                        ? " checked"
                        : false
                    }
                  />
                  <div className="project-finishing-options__li__text">
                    {projectFinishesDefault[1].type}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectFinishingOptions;
