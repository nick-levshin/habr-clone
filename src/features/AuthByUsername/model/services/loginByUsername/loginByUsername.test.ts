import axios from 'axios';
import { userActions } from '@/entities/User';
import { loginByUsername } from './loginByUsername';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

// Example without custom Class implementation
//
// describe('loginByUsername', () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;

//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });

//   test('success login', async () => {
//     const userValue = { id: '1', username: 'username' };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

//     const action = loginByUsername({
//       username: 'username',
//       password: 'password',
//     });
//     const result = await action(dispatch, getState, undefined);

//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(result.meta.requestStatus).toBe('fulfilled');
//     expect(result.payload).toEqual(userValue);
//   });

//   test('error login', async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

//     const action = loginByUsername({
//       username: 'username',
//       password: 'password',
//     });
//     const result = await action(dispatch, getState, undefined);

//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(result.meta.requestStatus).toBe('rejected');
//     expect(result.payload).toEqual(
//       'You entered an incorrect username or password',
//     );
//   });
// });

describe('loginByUsername', () => {
  const loginData = {
    username: 'username',
    password: 'password',
  };

  test('success login', async () => {
    const userValue = { id: '1', username: 'username' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(loginData);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue),
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(loginData);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(
      'You entered an incorrect username or password',
    );
  });
});
