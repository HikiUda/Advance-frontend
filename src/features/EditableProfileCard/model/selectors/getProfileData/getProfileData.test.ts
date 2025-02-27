import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    it('get data', () => {
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
        const state: DeepPartial<StateSchema> = { profile: { data } };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    it('get not data', () => {
        const state: DeepPartial<StateSchema> = { profile: { data: undefined } };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
