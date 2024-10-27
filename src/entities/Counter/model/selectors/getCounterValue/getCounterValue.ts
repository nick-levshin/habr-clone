import { createSelector } from '@reduxjs/toolkit';
import { CounterScheme } from '../../types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterScheme) => counter.value,
);
