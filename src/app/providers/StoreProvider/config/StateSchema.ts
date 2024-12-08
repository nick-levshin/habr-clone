import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterScheme } from '@/entities/Counter';
import { UserScheme } from '@/entities/User';
import { LoginScheme } from '@/features/AuthByUsername';

export interface StateSchema {
  counter: CounterScheme;
  user: UserScheme;

  // Async reducers
  loginForm?: LoginScheme;
}

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
