import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlePageSearch } from './getArticlePageSearch';

describe('getArticlePageSearch', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { search: 'search' } };
        expect(getArticlePageSearch(state as StateSchema)).toEqual('search');
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageSearch(state as StateSchema)).toBe('');
    });
});
