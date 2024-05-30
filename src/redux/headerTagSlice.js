import { createSlice } from "@reduxjs/toolkit";

export const headerTagSlice = createSlice({
  name: "headerTag",
  initialState: {
    isStateActive: true
  },
  reducers: {
    activeTag: (state) => {
      return({
        ...state,
        isStateActive:(!state.isStateActive)
      });
    }
  }
});

export const {activeTag} = headerTagSlice.actions;
export default headerTagSlice.reducer