import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';
import { getArticlePageView } from './getArticlePageView';

describe('getArticlePageView', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { view: ArticleView.BIG } };
        expect(getArticlePageView(state as StateSchema)).toEqual(ArticleView.BIG);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageView(state as StateSchema)).toBe(undefined);
    });
});
