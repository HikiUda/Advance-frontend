import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlePageNum } from './getArticlePageNum';

describe('getArticlePageNum', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { articlePage: { page: 2 } };
        expect(getArticlePageNum(state as StateSchema)).toEqual(2);
    });

    it('get when not reducer ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlePageNum(state as StateSchema)).toBe(1);
    });
});
