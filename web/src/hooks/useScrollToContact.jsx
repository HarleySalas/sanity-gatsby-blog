import { useCallback } from "react";
import { useTrackedState } from "../context/store";

const useScrollToContact = () => {
  const state = useTrackedState();
  const contactSectionRef = state.sharedState.currentPageContactSection;

  const handleScrollToContact = useCallback(() => {
    if (contactSectionRef) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [contactSectionRef]);
  return handleScrollToContact;
};

export default useScrollToContact;
