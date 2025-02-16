import { StoreProvider } from './ui/StoreProvider';
import type { ReduxStoreWithManager, StateSchema, ThunkConfig } from './config/StoreScheme';
import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';

export { StoreProvider, createReduxStore, StateSchema, ReduxStoreWithManager, AppDispatch, ThunkConfig };
