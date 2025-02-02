/* eslint-disable max-len */
import { FC, memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuelLoader, ReducersList } from 'shared/lib/components/DynamicModuelLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import cls from './ArticlePage.module.scss';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlePageSlice';
import { getArticlePageView } from '../model/selectors/getArticlePageView/getArticlePageView';
import { getArticlePageIsLoading } from '../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../model/services/initArticlePage/initArticlePage';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlesPageReducer,
};

const ArticlePage: FC<ArticlePageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlePageView);
    const isLoading = useSelector(getArticlePageIsLoading);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlePage());
    });

    return (
        <DynamicModuelLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuelLoader>
    );
};

export default memo(ArticlePage);
