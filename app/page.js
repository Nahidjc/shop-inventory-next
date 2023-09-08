"use client"
import { Provider } from "react-redux";
import AuthProvider from "../components/AuthProvider";
import { store } from "../store/store";
import Counter from "@/components/Counter/Counter";
export default function Home() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Counter />
      </AuthProvider>
    </Provider>
  );
}
