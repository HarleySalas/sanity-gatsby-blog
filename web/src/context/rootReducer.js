import combineReducers from "../lib/other/combineReducers";

import selectedProjectReducer from "./selectedProject/selectedProject.reducer";
import sharedStateReducer from "./sharedState/sharedState.reducer";

const rootReducer = combineReducers({
  selectedProject: selectedProjectReducer,
  sharedState: sharedStateReducer,
});

export default rootReducer;
