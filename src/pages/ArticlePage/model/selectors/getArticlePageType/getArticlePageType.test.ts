import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import { getArticlePageType } from './getArticlePageType';

describe('getArticlePageType', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { type: ArticleType.IT } };
        expect(getArticlePageType(state as StateSchema)).toEqual(ArticleType.IT);
    });
    it('get default when have not state ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageType(state as StateSchema)).toBe(ArticleType.ALL);
    });
});
