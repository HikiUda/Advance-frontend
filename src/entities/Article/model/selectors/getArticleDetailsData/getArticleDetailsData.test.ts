import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from './getArticleDetailsData';

describe('getArticleDetailsData', () => {
    it('get article', () => {
        const state: DeepPartial<StateSchema> = { articleDetails: { data: { id: '1' } } };
        expect(getArticleDetailsData(state as StateSchema)).toEqual({ id: '1' });
    });
    it('get not article', () => {
        const state: DeepPartial<StateSchema> = { articleDetails: {} };
        expect(getArticleDetailsData(state as StateSchema)).toBe(undefined);
    });
});
