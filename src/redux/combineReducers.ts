import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "./Reducers/counterSlice";
import appPreferencesSlice from "./Reducers/appPreferencesSlice";

// Configure Redux-Persist
const persistConfig = {
  key: "redux-toolkit",
  storage,
  whitelist: ["counter", "appPreferences"], // Reducers to persist
};

// Combine all the reducers into one
const rootReducer = combineReducers({
  counter: counterSlice,
  appPreferences: appPreferencesSlice,

  // Add more slices as needed
});

// Create a persisted reducer
const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export default persistedRootReducer;
