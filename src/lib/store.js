import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "./dummySlice";
import loginReducer from "../lib/auth/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    dummy: dummyReducer,
  },
});