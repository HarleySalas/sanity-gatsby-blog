import selectedProjectActionTypes from "./selectedProject.types";

//import utils

const selectedProjectReducer = (state, action) => {
  switch (action.type) {
    case selectedProjectActionTypes.SET_SELECTED_PROJECT_DEFAULT:
      return {
        ...state,
        name: action.payload.name,
        price: action.payload.price,
        foundation: {
          index: 0,
          type: action.payload.foundations[0].type.name,
          cost: action.payload.foundations[0].cost,
        },
      };
    case selectedProjectActionTypes.SET_SELECTED_PROJECT_FOUNDATION:
      return {
        ...state,
        foundation: {
          index: action.payload.index,
          type: action.payload.foundation.type.name,
          cost: action.payload.foundation.cost,
        },
      };
    default:
      return state;
  }
};

export default selectedProjectReducer;
