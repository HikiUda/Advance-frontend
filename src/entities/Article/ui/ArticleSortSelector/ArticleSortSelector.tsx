import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortFeald } from '../../model/types/article';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortFeald;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSortField: (newSort: ArticleSortFeald) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
    const { className, sort, order, onChangeOrder, onChangeSortField } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );
    const sortFieldOptions = useMemo<SelectOption<ArticleSortFeald>[]>(
        () => [
            {
                value: ArticleSortFeald.CREATED,
                content: t('по дате создания'),
            },
            {
                value: ArticleSortFeald.TITLE,
                content: t('по загаловку'),
            },
            {
                value: ArticleSortFeald.VIEWS,
                content: t('по просмотрам'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortFeald>
                options={sortFieldOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSortField}
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
};
