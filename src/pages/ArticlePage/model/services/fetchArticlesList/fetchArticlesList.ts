import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../../selectors/getArticlePageLimit/getArticlePageLimit';

interface fetchArtclesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArtclesListProps, ThunkConfig<string>>(
    'articlePageSlice/fetchArticlesList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const { page = 1 } = props;
        const limit = getArticlePageLimit(getState());
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
