import { createSlice } from '@reduxjs/toolkit';

export const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState: {
    isAllSelected: false,
    selectedItems: [],
  },
  reducers: {
    toggleAllSelected: (state, action) => {
      const isAllSelected = !state.isAllSelected;
      state.selectedItems = isAllSelected ? [...action.payload] : [];
      state.isAllSelected = isAllSelected;
    },
    toggleItemSelected: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.selectedItems.indexOf(itemId);

      if (itemIndex !== -1) {
        state.selectedItems.splice(itemIndex, 1);
      } else {
        state.selectedItems.push(itemId);
      }
    },
  },
});

export const { toggleAllSelected, toggleItemSelected } = checkBoxSlice.actions;
export default checkBoxSlice.reducer;
