import React, { useEffect, useState } from "react";
import "./mobile-nav-icon.scss";

const defaultClass = "mobile-nav-icon";

const MobileNavIcon = ({ isOpen, toggle }) => {
  const [classes, setClasses] = useState(defaultClass);

  useEffect(() => {
    if (isOpen) {
      setClasses(`${defaultClass} ${defaultClass}--animated`);
    } else {
      setClasses(defaultClass);
    }
  }, [isOpen]);

  return (
    <button className={classes} onClick={toggle}>
      <div className="mobile-nav-icon__line"></div>
      <div className="mobile-nav-icon__line"></div>
      <div className="mobile-nav-icon__line"></div>
    </button>
  );
};

export default MobileNavIcon;
