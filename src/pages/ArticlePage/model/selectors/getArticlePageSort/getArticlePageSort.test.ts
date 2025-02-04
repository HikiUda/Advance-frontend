import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortFeald } from 'entities/Article';
import { getArticlePageSort } from './getArticlePageSort';

describe('getArticlePageSort', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { sort: ArticleSortFeald.VIEWS } };
        expect(getArticlePageSort(state as StateSchema)).toEqual(ArticleSortFeald.VIEWS);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageSort(state as StateSchema)).toBe(ArticleSortFeald.CREATED);
    });
});
