import selectedProjectActionTypes from "./selectedProject.types";

export const setSelectedProjectDefault = ({
  name,
  price,
  foundations,
  finishes,
}) => ({
  type: selectedProjectActionTypes.SET_SELECTED_PROJECT_DEFAULT,
  payload: {
    name,
    price,
    foundations,
    finishes,
  },
});

export const setSelectedProjectFoundation = ({ foundation, index }) => ({
  type: selectedProjectActionTypes.SET_SELECTED_PROJECT_FOUNDATION,
  payload: {
    foundation,
    index,
  },
});

export const setSelectedProjectFinishing = ({ finish }) => ({
  type: selectedProjectActionTypes.SET_SELECTED_PROJECT_FINISH,
  payload: {
    finish,
  },
});
