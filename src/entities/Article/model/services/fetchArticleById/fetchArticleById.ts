import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Article } from '../../types/article';

export const fetchArticleDetails = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleDetails',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
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
