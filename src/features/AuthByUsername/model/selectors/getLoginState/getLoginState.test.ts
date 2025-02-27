import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    it('should return state', () => {
        const loginForm = { isLoading: false, username: 'admin', password: '123', error: 'error' };
        const state: DeepPartial<StateSchema> = {
            loginForm,
        };
        expect(getLoginState(state as StateSchema)).toEqual(loginForm);
    });
    it('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
