import { createSlice } from '@reduxjs/toolkit';

const defaultUser = {
  image: './assets/test.png',
  userName: 'test',
  email: 'test@example.com',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userStatus: defaultUser,
  },
  reducers: {
    addUser: (state) => {
      return state;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
