import { createSlice } from '@reduxjs/toolkit';
import { CounterScheme } from '../types/counterSchema';

const initialState: CounterScheme = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: counterActions, reducer: counterReducer } =
  counterSlice;
