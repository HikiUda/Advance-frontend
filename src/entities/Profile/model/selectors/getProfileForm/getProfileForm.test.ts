import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    it('get form', () => {
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
        const state: DeepPartial<StateSchema> = { profile: { form: data } };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    it('get not form', () => {
        const state: DeepPartial<StateSchema> = { profile: { form: undefined } };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
