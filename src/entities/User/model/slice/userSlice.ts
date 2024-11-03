import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserScheme } from '../types/userSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

const initialState: UserScheme = {
  authData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: state => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) state.authData = JSON.parse(user);
    },
    logout: state => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      state.authData = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions, reducer: userReducer } = userSlice;
