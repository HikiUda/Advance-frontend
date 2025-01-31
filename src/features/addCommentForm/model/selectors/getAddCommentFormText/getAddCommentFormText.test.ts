import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormText } from './getAddCommentFormText';

describe('getAddCommentFormText', () => {
    it('get ', () => {
        const state: DeepPartial<StateSchema> = { addCommentForm: { text: 'text' } };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('text');
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toBe(undefined);
    });
});
