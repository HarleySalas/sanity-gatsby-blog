import React, { useState, useRef } from "react";
import "./accordion-item.scss";
import Chevron from "../../../assets/icons/chevron.svg";

import { useToggle } from "../../../hooks";

const AccordionItem = ({ children, title }) => {
  const [active, toggle] = useToggle(false);
  const [height, setHeight] = useState(0);
  const [contentClasses, setContentClasses] = useState(
    "accordion-item__content"
  );
  const [chevronClasses, setChevronClasses] = useState(
    "accordion-item__chevron"
  );
  const [titleWrapperClasses, setTitleWrapperClasses] = useState(
    "accordion-item__title-wrapper"
  );
  const content = useRef(null);

  const toggleAccordion = () => {
    toggle();
    setHeight(active === false ? 0 : `${content.current.scrollHeight}`);
    setContentClasses(
      active === false
        ? "accordion-item__content"
        : "accordion-item__content accordion-item__content--active"
    );
    setChevronClasses(
      active === false
        ? "accordion-item__chevron"
        : "accordion-item__chevron accordion-item__chevron--active"
    );
    setTitleWrapperClasses(
      active === false
        ? "accordion-item__title-wrapper"
        : "accordion-item__title-wrapper accordion-item__title-wrapper--active"
    );
  };

  return (
    <li className="accordion-item">
      <button className={titleWrapperClasses} onClick={toggleAccordion}>
        <span className="accordion-item__title">
          {title}
          <Chevron className={chevronClasses} />
        </span>
      </button>
      <div
        className={contentClasses}
        ref={content}
        style={{ maxHeight: `${height}px` }}
      >
        <div className="accordion-item__content-wrapper">{children}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
