import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleItemById } from './getArticleItemById';

describe('getArticleItemById', () => {
    // it('get ', () => {
    //     const state: DeepPartial<StateSchema> = {};
    //     expect(getArticleItemById('7')).toEqual({});
    // });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleItemById('7')).toBe(undefined);
    });
});
