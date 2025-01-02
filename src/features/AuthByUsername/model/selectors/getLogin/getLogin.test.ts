import { StateSchema } from '@/app/providers/StoreProvider';
import { getLogin } from './getLogin';

describe('getLogin', () => {
  test('should return login', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
        password: 'password',
        isLoading: false,
        error: 'error',
      },
    };
    expect(getLogin(state as StateSchema)).toEqual({
      username: 'username',
      password: 'password',
      isLoading: false,
      error: 'error',
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLogin(state as StateSchema)).toEqual(undefined);
  });
});
