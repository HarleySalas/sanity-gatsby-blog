import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./accordion-singular.scss";
import { useToggle } from "../../hooks";
import { useEffect } from "react";

import Chevron from "../../assets/chevron.svg";

const AccordionSingular = ({
  id,
  isActiveInitialState = false,
  title,
  children,
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const [active, toggleActive] = useToggle(isActiveInitialState);
  const contentRef = useRef(null);

  const handleAccordionToggle = useCallback((e) => {
    const handleActiveItem = () => {
      toggleActive();
    };

    if (e.type === "keydown" && e.keyCode === "13") handleActiveItem();
    if (e.type === "click") handleActiveItem();
  }, []);

  //set active height size for the accordion content
  useEffect(() => {
    contentRef.current && setContentHeight(contentRef.current.scrollHeight);
  }, [handleHeight]);

  return (
    <>
      <div className="accordion-singular">
        {title}
        <button
          data-id={id}
          className="accordion-singular__trigger"
          aria-controls={id}
          aria-expanded={active}
          tabIndex={0}
          onClick={handleAccordionToggle}
          onKeyDown={handleAccordionToggle}
        >
          <Chevron className="accordion-singular__trigger__icon"></Chevron>
        </button>
      </div>
      <div
        className="accordion-singular__content"
        ref={contentRef}
        aria-hidden={active ? false : true}
        style={{
          overflow: "hidden",
          position: "relative",
          maxHeight: `${active ? contentHeight : 0}px`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default AccordionSingular;
