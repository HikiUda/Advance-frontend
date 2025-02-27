import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getCanEdit = createSelector(
    [(state: StateSchema) => state.user, (state: StateSchema) => state.profile],
    (user, profile) => user && profile && user.authData?.id === profile.data?.id,
);
