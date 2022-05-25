import combineReducers from "../lib/other/combineReducers";

import selectedProjectReducer from "./selectedProject/selectedProject.reducer";

const rootReducer = combineReducers({
  selectedProject: selectedProjectReducer,
});

export default rootReducer;
