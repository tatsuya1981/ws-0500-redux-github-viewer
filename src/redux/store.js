import { configureStore } from '@reduxjs/toolkit';
import issueReducer from './issueSlice';
import checkBoxReducer from './checkBoxSlice';

export const store = configureStore({
  reducer: {
    issues: issueReducer,
    checkBox: checkBoxReducer,
  },
});
