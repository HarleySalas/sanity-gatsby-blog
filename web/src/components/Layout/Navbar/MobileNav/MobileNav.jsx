import React from "react";
import MobileNavIcon from "./MobileNavIcon/MobileNavIcon";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <>
      <MobileNavIcon isOpen={isOpen} toggle={toggle} />
      <MobileNavMenu isOpen={isOpen} />
    </>
  );
};

export default MobileNav;
