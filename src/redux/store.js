import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawerSlice";
import headerTagReducer from "./headerTagSlice";
import issueReducer from "./issueSlice";




export const store =configureStore({
  reducer:{
    drawer: drawerReducer,
    headerTag: headerTagReducer,
    issues: issueReducer
  },
});