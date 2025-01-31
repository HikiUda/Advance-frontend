import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsError } from './getArticleDetailsError';

describe('getArticleDetailsError', () => {
    it('get error', () => {
        const state: DeepPartial<StateSchema> = { articleDetails: { error: 'error' } };
        expect(getArticleDetailsError(state as StateSchema)).toBe('error');
    });
    it('get not error', () => {
        const state: DeepPartial<StateSchema> = { articleDetails: {} };
        expect(getArticleDetailsError(state as StateSchema)).toBe(undefined);
    });
});
