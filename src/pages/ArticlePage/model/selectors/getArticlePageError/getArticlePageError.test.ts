import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlePageError } from './getArticlePageError';

describe('getArticlePageError', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { error: 'error' } };
        expect(getArticlePageError(state as StateSchema)).toEqual('error');
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageError(state as StateSchema)).toBe(undefined);
    });
});
