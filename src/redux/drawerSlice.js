import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    isStateOpen: false
  },
  reducers: {
    openMenu: (state) => {
      return({
        ...state,
        isStateOpen: (!state.isStateOpen)
      });
    }
  }
});

export const {openMenu} = drawerSlice.actions;
export default drawerSlice.reducer;