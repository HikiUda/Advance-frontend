import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveScheme } from '../types/scrollSaveScheme';

const initialState: ScrollSaveScheme = {
    scroll: {},
};

const scrollSaveSlice = createSlice({
    name: 'scrollSaveSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; postion: number }>) => {
            state.scroll[payload.path] = payload.postion;
        },
    },
});

export const { reducer: scrollSaveReducer, actions: scrollSaveActions } = scrollSaveSlice;
