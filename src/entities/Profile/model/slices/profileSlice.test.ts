import { DeepPartial } from '@reduxjs/toolkit';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileScheme, ValidateProfileError } from '../types/profile';

const data = {
    first: 'Тимур',
    lastname: 'Ульби',
    age: 33,
    currency: Currency.USD,
    country: Country.Kazahstan,
    city: 'Moscowff',
    username: 'admin',
    avatar: '',
};

describe('profileSlice', () => {
    it('set readonly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false };
        expect(profileReducer(state as ProfileScheme, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        });
    });
    it('cancel', () => {
        const state: DeepPartial<ProfileScheme> = {
            readonly: false,
            data,
            form: {},
            validateError: [],
        };
        expect(profileReducer(state as ProfileScheme, profileActions.cancelEdit())).toEqual({
            readonly: true,
            data,
            form: data,
            validateError: undefined,
        });
    });
    it('updateForm', () => {
        const state: DeepPartial<ProfileScheme> = { form: data };
        expect(
            profileReducer(state as ProfileScheme, profileActions.updateProfile({ lastname: 'wendsew' })),
        ).toEqual({
            form: { ...data, lastname: 'wendsew' },
        });
    });
    it('test updateProfile service pending', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileScheme, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });
    it('test updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileScheme, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
