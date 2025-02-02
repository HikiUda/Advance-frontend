import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollSave } from './getScrollSave';

describe('getScrollSave', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { scrollSave: { scroll: { adsf: 233 } } };
        expect(getScrollSave(state as StateSchema)).toEqual({ adsf: 233 });
    });
    it('get empty scroll', () => {
        const state: DeepPartial<StateSchema> = { scrollSave: { scroll: {} } };
        expect(getScrollSave(state as StateSchema)).toEqual({});
    });
});
