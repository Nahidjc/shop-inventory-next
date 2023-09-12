
import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import counterReducer from './reducers/counterSlice';
import authSlice from './reducers/auth';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [],
    },
  }).concat(logger),
  devTools: true,
});