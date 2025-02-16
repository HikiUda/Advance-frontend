import { StateSchema } from 'app/providers/StoreProvider';
import { getCanEdit } from './getCanEdit';

describe('getCanEdit', () => {
    it('equal ', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { id: '1' } },
            profile: { data: { id: '1' } },
        };
        expect(getCanEdit(state as StateSchema)).toEqual(true);
    });
    it('unequal ', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { id: '1' } },
            profile: { data: { id: '2' } },
        };
        expect(getCanEdit(state as StateSchema)).toEqual(false);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCanEdit(state as StateSchema)).toBe(undefined);
    });
});
