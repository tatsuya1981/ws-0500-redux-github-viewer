import { createSlice } from '@reduxjs/toolkit';

const defaultUser = [
  {
    image: '../../5819e9ae8cdc6360952be6a872708a2b.jpg',
    userName: 'test',
    email: 'test@example.com',
  },
];

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userStatus: defaultUser,
  },
  reducers: {
    addUser: (state) => {
      return { ...state };
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
