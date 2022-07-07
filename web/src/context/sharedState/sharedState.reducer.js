import sharedStateActionTypes from "./sharedState.types";

const sharedStateReducer = (state, action) => {
  switch (action.type) {
    case sharedStateActionTypes.SET_CURRENT_PAGE_CONTACT_SECTION:
      return {
        ...state,
        currentPageContactSection: action.payload.contactSection,
      };
    default:
      return state;
  }
};

export default sharedStateReducer;
