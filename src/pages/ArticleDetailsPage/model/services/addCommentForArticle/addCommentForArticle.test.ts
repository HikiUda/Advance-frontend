import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

describe('addCommentForArticle', () => {
    const mockState = { user: { authData: { id: '1' } }, articleDetails: { data: { id: '1' } } };
    it('fulfilled', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, mockState);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: {} }));

        const result = await thunk.callThunk('text');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({});
    });
    it('rejected', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, mockState);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('text');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
