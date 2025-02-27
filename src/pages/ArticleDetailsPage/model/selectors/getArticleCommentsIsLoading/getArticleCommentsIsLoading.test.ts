import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleCommentsIsLoading } from './getArticleCommentsIsLoading';

describe('getArticleCommentsIsLoading', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articleDetailsPage: { comments: { isLoading: true } } };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(undefined);
    });
});
