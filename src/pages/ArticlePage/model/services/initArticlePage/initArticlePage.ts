import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/getArticlePageInited/getArticlePageInited';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlePageSlice';

export const initArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePageSlice/initedArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const _inited = getArticlePageInited(getState());

        if (!_inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    },
);
