import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollSave } from '../getScrollSave/getScrollSave';

export const getScrollSaveByPath = createSelector(
    getScrollSave,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
