import { createSlice } from '@reduxjs/toolkit';
import { UserScheme } from '../types/userSchema';

const initialState: UserScheme = {
  // authData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: userActions, reducer: userReducer } = userSlice;
