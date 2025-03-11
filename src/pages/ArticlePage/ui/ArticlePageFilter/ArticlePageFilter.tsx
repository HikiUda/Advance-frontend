import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleView, ArticleSortFeald } from '@/entities/Article';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import type { ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { getArticlePageOrder } from '../../model/selectors/getArticlePageOrder/getArticlePageOrder';

import { getArticlePageSort } from '../../model/selectors/getArticlePageSort/getArticlePageSort';
import { getArticlePageSearch } from '../../model/selectors/getArticlePageSearch/getArticlePageSearch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlePageType } from '../../model/selectors/getArticlePageType/getArticlePageType';
import { articlesPageActions } from '../../model/slices/articlePageSlice';
import cls from './ArticlePageFilter.module.scss';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';

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
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input value={search} onChange={onChangeSearch} placeholder={t('Поиск')} />
            </Card>
            <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
        </div>
    );
};
