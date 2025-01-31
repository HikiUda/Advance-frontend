import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormError } from './getAddCommentFormError';

describe('getAddCommentFormError', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual({});
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toBe(undefined);
    });
});
