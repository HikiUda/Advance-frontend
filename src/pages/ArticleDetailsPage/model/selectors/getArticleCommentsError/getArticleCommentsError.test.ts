import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleCommentsError } from './getArticleCommentsError';

describe('getArticleCommentsError', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articleDetailsPage: { comments: { error: 'error' } } };
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toBe(undefined);
    });
});
