import { DeepPartial } from '@reduxjs/toolkit';
import { LoginScheme } from '../types/LoginScheme';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    it('set username', () => {
        const state: DeepPartial<LoginScheme> = { username: '' };
        expect(loginReducer(state as LoginScheme, loginActions.setUsername('admin'))).toEqual({
            username: 'admin',
        });
    });
    it('set password', () => {
        const state: DeepPartial<LoginScheme> = { password: '' };
        expect(loginReducer(state as LoginScheme, loginActions.setPassword('123'))).toEqual({
            password: '123',
        });
    });
});
