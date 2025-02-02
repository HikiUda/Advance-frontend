import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormScheme } from '../types/addCommentForm';

const initialState: AddCommentFormScheme = {
    text: '',
    error: undefined,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
