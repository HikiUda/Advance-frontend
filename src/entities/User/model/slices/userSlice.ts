import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER__LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { User, UserScheme } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/featureFlags';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initUserData } from '../services/initUserData';

const initialState: UserScheme = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(USER__LOCALSTORAGE_KEY, action.payload.id);
        },

        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER__LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, action: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = action.payload;
                }
            },
        );
        builder.addCase(initUserData.fulfilled, (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);

            state._inited = true;
        });
        builder.addCase(initUserData.rejected, (state) => {
            state._inited = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
