import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsRecommendationsError } from './getArticleDetailsRecommendationsError';

describe('getArticleDetailsRecommendationsError', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: { recommendations: { error: 'error' } },
        };
        expect(getArticleDetailsRecommendationsError(state as StateSchema)).toEqual('error');
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsRecommendationsError(state as StateSchema)).toBe(undefined);
    });
});
