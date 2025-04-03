import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../lib/auth/loginSlice";
import clientReducer from "../lib/client/clientSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    client: clientReducer,
  },
});