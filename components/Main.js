"use client"
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "./App";
const Main = ({ children }) => {
  return (
    <Provider store={store}>
      <App>{children}</App>
    </Provider>
  );
};

export default Main;
