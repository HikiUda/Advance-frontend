import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsRecommendationsIsLoading } from './getArticleDetailsRecommendationsIsLoading';

describe('getArticleDetailsRecommendationsIsLoading', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: { recommendations: { isLoading: true } },
        };
        expect(getArticleDetailsRecommendationsIsLoading(state as StateSchema)).toEqual(true);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsRecommendationsIsLoading(state as StateSchema)).toBe(undefined);
    });
});
