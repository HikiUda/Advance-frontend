import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';

describe('fetchArticlesList', () => {
    it('fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, { articlePage: { limit: 4 } });
        thunk.api.get.mockReturnValue(Promise.resolve({ data: [] }));

        const result = await thunk.callThunk({ page: 1 });

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual([]);
    });
    it('rejected', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, { articlePage: { limit: 4 } });
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ page: 1 });

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
