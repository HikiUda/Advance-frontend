import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    it('get error', () => {
        const state: DeepPartial<StateSchema> = { profile: { error: 'error' } };
        expect(getProfileError(state as StateSchema)).toBe('error');
    });
    it('get not error', () => {
        const state: DeepPartial<StateSchema> = { profile: {} };
        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
