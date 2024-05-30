import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawerSlice";
import headerTagReducer from "./headerTagSlice";

export const store =configureStore({
  reducer:{
    drawer: drawerReducer,
    headerTag: headerTagReducer,
  },
});