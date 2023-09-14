"use client"
import { Provider } from "react-redux";
import { store } from "../store/store";
import Navbar from "./navbar/Navbar";
const Main = ({ children }) => {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      {children}
    </Provider>
  );
};

export default Main;
