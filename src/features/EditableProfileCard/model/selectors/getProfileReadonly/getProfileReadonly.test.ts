import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    it('get readonly', () => {
        const state: DeepPartial<StateSchema> = { profile: { readonly: true } };
        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });
    it('get not readonly', () => {
        const state: DeepPartial<StateSchema> = { profile: {} };
        expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
    });
});
