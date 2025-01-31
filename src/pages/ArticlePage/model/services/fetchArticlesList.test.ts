import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';

describe('fetchArticlesList', () => {
    it('fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: [] }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual([]);
    });
    it('rejected', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
