import React, { useCallback, useState, useEffect } from "react";
import { useTrackedState } from "../../../../../context/store";
import "./project-selection.scss";
import { toRubleFormat } from "../../../../../lib/helpers";
import Button from "../../../../Button/Button";
import { useScrollToContact, useToggle } from "../../../../../hooks";
import Chevron from "../../../../../assets/icons/chevron.svg";

const PriceToast = ({ type, amount }) => {
  return amount !== 0 ? (
    <span
      className={`
        project-selection__price__toast__span 
        ${
          type === "add"
            ? "project-selection__price__toast__span--add"
            : "project-selection__price__toast__span--subtract"
        }
        project-selection__price__toast__span--animate
      `}
    >
      {toRubleFormat(amount)}
    </span>
  ) : null;
};

const ProjectSelection = ({ project }) => {
  const state = useTrackedState();
  const [price, setPrice] = useState(0);
  const [toast, setToast] = useState({
    key: "defaultKey",
    type: "",
    amount: 0,
  });
  const scrollToContact = useScrollToContact();
  const [active, toggleActive] = useToggle(true);

  const totalPrice = useCallback(() => {
    let total = project.price;
    if (state.selectedProject.foundation) {
      total = total + state.selectedProject.foundation.cost;
    }
    if (state.selectedProject.finish) {
      total = total + state.selectedProject.finish.cost;
    }

    return setPrice((prevState) => {
      if (prevState > 0 && prevState < total) {
        setToast({
          key: `add-${Math.random()}`,
          type: "add",
          amount: total - prevState,
        });
      }

      if (prevState > 0 && prevState > total) {
        setToast({
          key: `subtract-${Math.random()}`,
          type: "subtract",
          amount: prevState - total,
        });
      }
      return total;
    });
  }, [
    project.price,
    state.selectedProject.foundation,
    state.selectedProject.finish,
  ]);

  useEffect(() => {
    totalPrice();
  }, [totalPrice]);

  if (state.selectedProject) {
    return (
      <div
        className={`project-selection ${
          !active ? "project-selection--inactive" : null
        }`}
      >
        <div className="container project-selection__container">
          <div className="project-selection__wrapper">
            <button
              className={`project-selection__control ${
                !active ? "project-selection__control--closed" : null
              }`}
              onClick={toggleActive}
            >
              <div className="project-selection__control__chevron__wrapper">
                <Chevron
                  className={`project-selection__control__chevron ${
                    !active
                      ? "project-selection__control__chevron--closed"
                      : null
                  }`}
                />
              </div>
            </button>
            <div className="project-selection__price-wrapper">
              <div className="project-selection__price">
                {toRubleFormat(price)}
              </div>
              <div className="project-selection__price__toast">
                <PriceToast
                  type={toast.type}
                  amount={toast.amount}
                  key={`${toast.key}-${toast.amount}`}
                />
              </div>
            </div>
            <Button btnSize="xs" onClick={scrollToContact}>
              Рассчитать
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectSelection;
