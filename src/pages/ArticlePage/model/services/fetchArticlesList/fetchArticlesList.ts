import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import { getArticlePageLimit } from '../../selectors/getArticlePageLimit/getArticlePageLimit';
import { getArticlePageNum } from '../../selectors/getArticlePageNum/getArticlePageNum';
import { getArticlePageOrder } from '../../selectors/getArticlePageOrder/getArticlePageOrder';
import { getArticlePageSort } from '../../selectors/getArticlePageSort/getArticlePageSort';
import { getArticlePageSearch } from '../../selectors/getArticlePageSearch/getArticlePageSearch';
import { getArticlePageType } from '../../selectors/getArticlePageType/getArticlePageType';

interface fetchArticlesListProps {
    replays?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
    'articlePageSlice/fetchArticlesList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const page = getArticlePageNum(getState());
        const limit = getArticlePageLimit(getState());
        const order = getArticlePageOrder(getState());
        const sort = getArticlePageSort(getState());
        const search = getArticlePageSearch(getState());
        const type = getArticlePageType(getState());
        try {
            addQueryParams({
                sort,
                order,
                search,
                type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _order: order,
                    _sort: sort,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });
            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
