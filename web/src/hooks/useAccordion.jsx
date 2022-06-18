import { useState, useCallback, useRef } from "react";

const useAccordion = (itemIds) => {
  const [activeItem, setActiveItem] = useState(null);
  const contentRefs = useRef([]);

  const addRef = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  //   const handleAccordionToggle = useCallback(
  //     (id) => {
  //       if (activeItem === id) {
  //         setActiveItem(-1);
  //       }

  //       if (activeItem !== id) {
  //         setActiveItem(id);
  //       }
  //     },
  //     [activeItem, setActiveItem]
  //   );

  const handleAccordionToggle = useCallback(
    (e) => {
      const id = e.currentTarget.dataset.id;
      if (activeItem === id) {
        setActiveItem(-1);
      }

      if (activeItem !== id) {
        setActiveItem(id);
      }
    },
    [activeItem]
  );

  const accordionProps = Object.fromEntries(
    itemIds.map((id) => [
      id,
      {
        triggerProps: {
          "data-id": id,
          "aria-controls": id,
          "aria-expanded": `${activeItem === id}`,
          tabIndex: "0",
          //   onClick: () => handleAccordionToggle(id),
          onClick: handleAccordionToggle,
          onKeyDown: ({ keyCode }) => {
            if (keyCode === 13) handleAccordionToggle(id);
          },
        },
        contentProps: {
          id: id,
          "aria-hidden": `${activeItem === id ? false : true}`,
          ref: addRef,
          key: `content-${id}-key`,
          style: {
            overflow: "hidden",
            position: "relative",
            maxHeight: `${
              activeItem === id
                ? contentRefs.current.find((el) => el.id === id).scrollHeight
                : 0
            }px`,
          },
        },
      },
    ])
  );

  //   const cachedAccordionProps = useDeepMemo(
  //     () => accordionProps,
  //     [accordionProps]
  //   );

  return {
    activeItem,
    accordionProps,
  };
};

export default useAccordion;
