import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlePageOrder } from './getArticlePageOrder';

describe('getArticlePageOrder', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { order: 'desc' } };
        expect(getArticlePageOrder(state as StateSchema)).toEqual('desc');
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageOrder(state as StateSchema)).toBe('asc');
    });
});
