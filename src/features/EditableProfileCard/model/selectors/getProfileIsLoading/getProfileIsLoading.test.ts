import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    it('get isLoading', () => {
        const state: DeepPartial<StateSchema> = { profile: { isLoading: true } };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });
    it('get not isLoading', () => {
        const state: DeepPartial<StateSchema> = { profile: {} };
        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});
