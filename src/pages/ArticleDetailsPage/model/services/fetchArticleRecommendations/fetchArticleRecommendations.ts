import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticleRecommendatoins = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articleDetailsRecommendationsSlice/fetchArticleRecommendatoins',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
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
