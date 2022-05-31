import React from "react";
import MobileNavIcon from "./MobileNavIcon/MobileNavIcon";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const MobileNav = ({ location, isOpen, toggle }) => {
  return (
    <>
      <MobileNavIcon isOpen={isOpen} toggle={toggle} />
      <MobileNavMenu isOpen={isOpen} location={location} toggle={toggle} />
    </>
  );
};

export default MobileNav;
