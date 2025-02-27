import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlePageInited } from './getArticlePageInited';

describe('getArticlePageInited', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { _inited: false } };
        expect(getArticlePageInited(state as StateSchema)).toEqual(false);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageInited(state as StateSchema)).toBe(undefined);
    });
});
