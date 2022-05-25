import { useReducer } from "react";
import { createContainer } from "react-tracked";
import rootReducer from "./rootReducer";
import initialState from "./initialState";

// const initialState = {
//   currentProject: {
//     price: 0,
//     name: "",
//   },
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_CURRENT_PROJECT_DEFAULT":
//       return {
//         ...state,
//         currentProject: {
//           ...state.currentProject,
//           name: action.project.name,
//           price: action.project.price,
//         },
//       };
//     default:
//       return state;
//   }
// };

const useValue = () => useReducer(rootReducer, initialState);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
