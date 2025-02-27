import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlePageLimit } from './getArticlePageLimit';

describe('getArticlePageLimit', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { limit: 4 } };
        expect(getArticlePageLimit(state as StateSchema)).toEqual(4);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageLimit(state as StateSchema)).toBe(9);
    });
});
