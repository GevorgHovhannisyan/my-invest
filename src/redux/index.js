import { combineReducers } from "@reduxjs/toolkit";

import languageSlice from "./slices/langauge/langauge";

export const rootReducer = combineReducers({
  language: languageSlice,
});
