import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { User } from '../types/user';
import { USER__LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { getUserDataByIdQuery } from '../api/userApi';

export const initUserData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initUserData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        const userId = localStorage.getItem(USER__LOCALSTORAGE_KEY);
        if (!userId) {
            return rejectWithValue('error');
        }
        try {
            const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
