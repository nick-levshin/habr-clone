import { LoginScheme } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test setUsername', async () => {
    const state: DeepPartial<LoginScheme> = {
      username: 'username',
    };

    expect(
      loginReducer(
        state as LoginScheme,
        loginActions.setUsername(state.username),
      ),
    ).toEqual({ username: 'username' });
  });

  test('test setPassword', async () => {
    const state: DeepPartial<LoginScheme> = {
      password: 'password',
    };

    expect(
      loginReducer(
        state as LoginScheme,
        loginActions.setPassword(state.password),
      ),
    ).toEqual({ password: 'password' });
  });
});
