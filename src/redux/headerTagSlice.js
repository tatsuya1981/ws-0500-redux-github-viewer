import { createSlice } from "@reduxjs/toolkit";

export const headerTagSlice = createSlice({
  name: "headerTag",
  initialState: {
    isStateActive: true,
  },
  reducers: {
    activeTag: (state, action) => {
      state.isStateActive = action.payload;
    },
  },
});

export const { activeTag } = headerTagSlice.actions;
export default headerTagSlice.reducer;
