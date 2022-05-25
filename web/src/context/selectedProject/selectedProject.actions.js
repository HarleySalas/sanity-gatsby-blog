import selectedProjectActionTypes from "./selectedProject.types";

export const setSelectedProjectDefault = ({ name, price, foundations }) => ({
  type: selectedProjectActionTypes.SET_SELECTED_PROJECT_DEFAULT,
  payload: {
    name,
    price,
    foundations,
  },
});

export const setSelectedProjectFoundation = ({ foundation, index }) => ({
  type: selectedProjectActionTypes.SET_SELECTED_PROJECT_FOUNDATION,
  payload: {
    foundation,
    index,
  },
});
