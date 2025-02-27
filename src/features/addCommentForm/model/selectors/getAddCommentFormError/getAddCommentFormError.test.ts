import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormError } from './getAddCommentFormError';

describe('getAddCommentFormError', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { addCommentForm: { error: 'error' } };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toBe(undefined);
    });
});
