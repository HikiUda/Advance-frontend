import { StateSchema } from 'app/providers/StoreProvider';
import { getCanEdit } from './getCanEdit';

describe('getCanEdit', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCanEdit(state as StateSchema)).toEqual({});
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCanEdit(state as StateSchema)).toBe(undefined);
    });
});
