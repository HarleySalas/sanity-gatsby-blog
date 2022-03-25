import React from "react";
import "./accordion.scss";

const Accordion = ({ children }) => {
  return (
    <ul className="accordion">
      {children}
      {/* space filler */}
    </ul>
  );
};

export default Accordion;
