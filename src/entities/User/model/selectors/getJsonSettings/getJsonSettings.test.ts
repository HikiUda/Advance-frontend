import { StateSchema } from '@/app/providers/StoreProvider';
import { getJsonSettings } from './getJsonSettings';

describe('getJsonSettings', () => {
    // it('get ', () => {
    //     const state: DeepPartial<StateSchema> = {};
    //     expect(getJsonSettings(state as StateSchema)).toEqual({});
    // });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getJsonSettings(state as StateSchema)).toBe(undefined);
    });
});
