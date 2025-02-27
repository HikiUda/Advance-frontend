import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsIsLoading } from './getArticleDetailsIsLoading';

describe('getArticleDetailsIsLoading', () => {
    it('get isLoading', () => {
        const state: DeepPartial<StateSchema> = { articleDetails: { isLoading: false } };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
    });
    it('get not isLoading', () => {
        const state: DeepPartial<StateSchema> = { articleDetails: {} };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(undefined);
    });
});
