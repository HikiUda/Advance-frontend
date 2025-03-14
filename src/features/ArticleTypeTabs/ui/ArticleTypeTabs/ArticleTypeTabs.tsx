import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: 'All',
            },
            {
                value: ArticleType.IT,
                content: 'IT',
            },
            {
                value: ArticleType.ECONOMICS,
                content: 'ECONOMICS',
            },
            {
                value: ArticleType.SCIENCE,
                content: 'SCIENCE',
            },
        ],
        [],
    );

    const onClickTab = useCallback(
        (tab: TabItem<ArticleType>) => {
            onChangeType(tab.value);
        },
        [onChangeType],
    );

    return (
        <Tabs<ArticleType>
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onClickTab}
        />
    );
});
