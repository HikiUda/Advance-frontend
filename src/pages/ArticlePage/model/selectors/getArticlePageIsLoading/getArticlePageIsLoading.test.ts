import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlePageIsLoading } from './getArticlePageIsLoading';

describe('getArticlePageIsLoading', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { isLoading: true } };
        expect(getArticlePageIsLoading(state as StateSchema)).toEqual(true);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageIsLoading(state as StateSchema)).toBe(undefined);
    });
});
