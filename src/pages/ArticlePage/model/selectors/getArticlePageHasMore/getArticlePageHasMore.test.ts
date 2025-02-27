import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlePageHasMore } from './getArticlePageHasMore';

describe('getArticlePageHasMore', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { hasMore: true } };
        expect(getArticlePageHasMore(state as StateSchema)).toEqual(true);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageHasMore(state as StateSchema)).toBe(undefined);
    });
});
