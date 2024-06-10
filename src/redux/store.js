import { configureStore } from '@reduxjs/toolkit';
import issueReducer from './issueSlice';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    issues: issueReducer,
    user: userReducer,
  },
});
