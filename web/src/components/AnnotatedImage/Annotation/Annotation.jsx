import React, { useCallback } from "react";
import { useToggle } from "../../../hooks";
import { Popover, ArrowContainer } from "react-tiny-popover";
import "./annotation.scss";

const Annotation = ({ content, x, y, parentSize }) => {
  const [active, toggle] = useToggle(false);

  const positionX = useCallback(() => {
    return (parentSize.x * x) / 100;
  }, [parentSize.x, x]);

  const positionY = useCallback(() => {
    return (parentSize.y * y) / 100;
  }, [parentSize.y, y]);

  return (
    <Popover
      isOpen={active}
      onClickOutside={toggle}
      padding={10}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"#f2f2f2"}
          arrowSize={7}
          arrowStyle={{ opacity: 0.9 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div className="annotation__popover">{content}</div>
        </ArrowContainer>
      )}
    >
      <div
        className="annotation"
        style={{ left: positionX(), top: positionY() }}
        onClick={toggle}
        aria-hidden="true"
      ></div>
    </Popover>
  );
};

export default Annotation;
