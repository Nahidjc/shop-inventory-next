
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import authSlice from './reducers/auth';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice
  },
  devTools: true,
});