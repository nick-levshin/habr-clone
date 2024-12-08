import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from '@/app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
  [reducerKey in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  reducers,
  removeAfterUnmount,
  children,
}) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(
      ([reducerKey, reducer]: ReducersListEntry) => {
        store.reducerManager.add(reducerKey, reducer);
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      },
    );

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([reducerKey, _reducer]: ReducersListEntry) => {
            store.reducerManager.remove(reducerKey);
            dispatch({ type: `@DESTROY ${reducerKey} reducer` });
          },
        );
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
