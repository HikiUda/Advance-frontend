/* eslint-disable max-len */
import { FC, memo, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import { DynamicModuelLoader, ReducersList } from '@/shared/lib/components/DynamicModuelLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import cls from './ArticlePage.module.scss';
import { articlesPageReducer } from '../../model/slices/articlePageSlice';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlesPageReducer,
};

const ArticlePage: FC<ArticlePageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const [search, setSearchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlePage(search));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <DynamicModuelLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                data-testid="ArticlePage"
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticlePageFilter />
                <ArticleInfiniteList />
            </Page>
        </DynamicModuelLoader>
    );
};

export default memo(ArticlePage);
