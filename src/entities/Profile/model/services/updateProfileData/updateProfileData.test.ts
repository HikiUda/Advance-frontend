import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    id: '1',
    first: 'Тимур',
    lastname: 'Ульби',
    age: 33,
    currency: Currency.USD,
    country: Country.Kazahstan,
    city: 'Moscowff',
    username: 'admin',
    avatar: '',
};

describe('updateProfileData', () => {
    it('fulfilled', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(data);
    });
    it('rejected', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    it('validate rejected', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, first: '' } } });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
