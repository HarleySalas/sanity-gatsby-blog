import React from "react";
import MobileNavIcon from "./MobileNavIcon/MobileNavIcon";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

import { useToggle } from "../../../../hooks";

const MobileNav = () => {
  const [isOpen, toggle] = useToggle(false);
  return (
    <>
      <MobileNavIcon isOpen={isOpen} toggle={toggle} />
      <MobileNavMenu isOpen={isOpen} />
    </>
  );
};

export default MobileNav;
