import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleTypeTabs, ArticleView, ArticleViewSelector } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector, ArticleSortFeald, ArticleType } from 'entities/Article/';
import { getArticlePageOrder } from 'pages/ArticlePage/model/selectors/getArticlePageOrder/getArticlePageOrder';

import { SortOrder } from 'shared/types/sort';
import { getArticlePageSort } from 'pages/ArticlePage/model/selectors/getArticlePageSort/getArticlePageSort';
import { getArticlePageSearch } from 'pages/ArticlePage/model/selectors/getArticlePageSearch/getArticlePageSearch';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { getArticlePageType } from 'pages/ArticlePage/model/selectors/getArticlePageType/getArticlePageType';
import { articlesPageActions } from '../../model/slices/articlePageSlice';
import cls from './ArticlePageFilter.module.scss';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';

interface ArticlePageFilterProps {
    className?: string;
}

export const ArticlePageFilter: FC<ArticlePageFilterProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);

    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replays: true }));
    }, [dispatch]);
    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );
    const onChangeSortField = useCallback(
        (sortField: ArticleSortFeald) => {
            dispatch(articlesPageActions.setSort(sortField));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageActions.setOreder(order));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData],
    );
    const onChangeType = useCallback(
        (type: ArticleType) => {
            dispatch(articlesPageActions.setType(type));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSortField={onChangeSortField}
                    order={order}
                    sort={sort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
};
