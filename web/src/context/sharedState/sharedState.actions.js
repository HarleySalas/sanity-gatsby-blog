import sharedStateActionTypes from "./sharedState.types";

export const setSharedStateCurrentPageContactSection = ({
  contactSection,
}) => ({
  type: sharedStateActionTypes.SET_CURRENT_PAGE_CONTACT_SECTION,
  payload: {
    contactSection,
  },
});
