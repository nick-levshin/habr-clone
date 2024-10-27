import { CounterScheme } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });

  test('should decrement value', () => {
    const state: Partial<CounterScheme> = {
      value: 10,
    };
    expect(
      counterReducer(state as CounterScheme, counterActions.decrement()),
    ).toEqual({ value: 9 });
  });

  test('should increment value', () => {
    const state: Partial<CounterScheme> = {
      value: 10,
    };
    expect(
      counterReducer(state as CounterScheme, counterActions.increment()),
    ).toEqual({ value: 11 });
  });
});
