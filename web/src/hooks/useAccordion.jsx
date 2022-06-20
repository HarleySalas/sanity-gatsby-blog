import { useState, useCallback, useRef, useEffect } from "react";
import useWindowResize from "./useWindowResize";

const useAccordion = (itemIds) => {
  const [activeItem, setActiveItem] = useState(-1);
  const contentRefs = useRef([]);
  const [accordionContentHeights, setAccordionContentHeights] = useState({});
  const windowSize = useWindowResize();

  const handleAccordionContentHeights = useCallback(() => {
    contentRefs.current &&
      setAccordionContentHeights(
        Object.fromEntries(
          contentRefs.current.map((el) => [
            el.id,
            {
              scrollHeight: el.scrollHeight,
            },
          ])
        )
      );
  }, []);

  const addRef = useCallback(
    (el) => {
      if (el && !contentRefs.current.includes(el)) {
        contentRefs.current.push(el);
      }
    },
    [contentRefs]
  );

  const handleAccordionToggle = useCallback((e) => {
    const id = e.currentTarget.dataset.id;

    const handleActiveItem = () => {
      setActiveItem((prevItem) => {
        prevItem === id ? setActiveItem(-1) : setActiveItem(id);
      });
    };

    if (e.type === "keydown" && e.keyCode === "13") handleActiveItem();
    if (e.type === "click") handleActiveItem();
  }, []);

  //set content heights
  useEffect(() => {
    handleAccordionContentHeights();
  }, [handleAccordionContentHeights, windowSize]);

  const accordionProps = Object.fromEntries(
    itemIds.map((id) => [
      id,
      {
        isActive: activeItem === id ? true : false,
        triggerProps: {
          "data-id": id,
          "aria-controls": id,
          "aria-expanded": `${activeItem === id}`,
          tabIndex: "0",
          onClick: handleAccordionToggle,
          onKeyDown: handleAccordionToggle,
        },
        contentProps: {
          id: id,
          "aria-hidden": `${activeItem === id ? false : true}`,
          ref: addRef,
          style: {
            overflow: "hidden",
            position: "relative",
            maxHeight: `${
              activeItem === id
                ? accordionContentHeights &&
                  accordionContentHeights[id].scrollHeight
                : 0
            }px`,
          },
        },
      },
    ])
  );

  return accordionProps;
};

export default useAccordion;
