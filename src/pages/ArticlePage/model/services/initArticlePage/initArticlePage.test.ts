import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { ArticleView } from '@/entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlePage } from './initArticlePage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlePage', () => {
    it('not inited', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlePage: {
                page: 1,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                limit: 1,
                isLoading: false,
                hasMore: true,
                _inited: false,
            },
        });
        await thunk.callThunk(new URLSearchParams());
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({});
    });
    it('inited', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlePage: {
                page: 1,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                limit: 1,
                isLoading: false,
                hasMore: true,
                _inited: true,
            },
        });
        await thunk.callThunk(new URLSearchParams());
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
