import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollSaveByPath } from './getScrollSaveByPath';

describe('getScrollSaveByPath', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { scrollSave: { scroll: { main: 222 } } };
        expect(getScrollSaveByPath(state as StateSchema, 'main')).toEqual(222);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = { scrollSave: { scroll: {} } };
        expect(getScrollSaveByPath(state as StateSchema, 'main')).toBe(0);
    });
});
