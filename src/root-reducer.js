import { combineReducers } from "redux";

import currencies from "./modules/calculator/reducers/currencies";

const appReducer = combineReducers({ currencies });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;