import { StoreProvider } from './ui/StoreProvider';

import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';

export { StoreProvider, createReduxStore, AppDispatch };

export type {
    ReduxStoreWithManager,
    ThunkConfig,
    StateSchemaKey,
    StateSchema,
} from './config/StoreScheme';
