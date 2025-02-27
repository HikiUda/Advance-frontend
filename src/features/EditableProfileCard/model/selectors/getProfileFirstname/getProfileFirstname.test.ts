import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileFirstname } from './getProfileFirstname';

describe('getProfileFirstname', () => {
    it('get firstname', () => {
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
        expect(getProfileFirstname(state as StateSchema)).toEqual(data.first);
    });
    it('get not firsname', () => {
        const state: DeepPartial<StateSchema> = { profile: { data: undefined } };
        expect(getProfileFirstname(state as StateSchema)).toEqual(undefined);
    });
});
