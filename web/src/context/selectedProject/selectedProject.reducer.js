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
        finish: {
          key: action.payload.finishes[0]._key,
          type: action.payload.finishes[0].type,
          cost: action.payload.finishes[0].cost,
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
    case selectedProjectActionTypes.SET_SELECTED_PROJECT_FINISH:
      return {
        ...state,
        finish: {
          key: action.payload.finish._key,
          type: action.payload.finish.type,
          cost: action.payload.finish.cost,
        },
      };
    default:
      return state;
  }
};

export default selectedProjectReducer;
