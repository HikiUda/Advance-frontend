import { StateSchema } from 'app/providers/StoreProvider';
import { getCanEditArticle } from './getCanEditArticle';

describe('getCanEditArticle', () => {
    it('can edit ', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { data: { user: { id: '1' } } },
            user: { authData: { id: '1' } },
        };
        expect(getCanEditArticle(state as StateSchema)).toEqual(true);
    });
    it('cannt edit', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCanEditArticle(state as StateSchema)).toBe(false);
    });
});
